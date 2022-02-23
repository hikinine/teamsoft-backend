import { Request, Response} from "express"
import { Validation, Repository } from './../../core/types/index';
import { AddressService } from './../services/address.service';
import { ApplicationExceptionController } from "../../shared/infra/http/errors/ApplicationExceptionController"

export class AddressController {

  private exception: ApplicationExceptionController
  private service: AddressService
  
  constructor(props: {
    validation: Validation,
    repository: Repository,
    exception: ApplicationExceptionController,
  }) {

    this.exception = props.exception
    
    this.service = new AddressService({
      repository: props.repository,
      validation: props.validation
    })
  }
 
  create = async (request: Request, response: Response) => {
    try {
      const { costumer_id } = request.params
      const data = request.body
      
      if (!costumer_id) throw new Error("ID is required!")
  
      const Address = await this.service.create(costumer_id, data)      
      return response.status(200).json(Address)
    } 
    catch (error) {     
      return this.exception.handle(response, error)      
    }   
  }

  findByCostumerId = async (request: Request, response: Response) => {
    try {
      const { id } = request.params
      
      if (!id) throw new Error("ID is required!")
  
      const Address = await this.service.findByCostumerId(id)      
      return response.status(200).json(Address)
    } 
    catch (error) {     
      return this.exception.handle(response, error)      
    }   
  }
  findById = async (request: Request, response: Response) => {
    try {
      const { id } = request.params
      
      if (!id) throw new Error("ID is required!")
  
      const Address = await this.service.findById(id)      
      return response.status(200).json(Address)
    } 
    catch (error) {     
      return this.exception.handle(response, error)      
    }   
  }
  findAll = async (request: Request, response: Response) => {
    try {    
      const Address = await this.service.findAll()      
      return response.status(200).json(Address)
    } 
    catch (error) {     
      return this.exception.handle(response, error)      
    }   
  }

}