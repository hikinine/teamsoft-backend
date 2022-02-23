import { Address } from "./address";
import { v4 as uuid } from "uuid";

export class Costumer {
  readonly id?: string;
  readonly cnpj: string;
  readonly companyName: string;
  readonly contactName: string;
  readonly telphone: string;
  readonly address: Address[];
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(props: {
    id?: string;
    cnpj: string;
    companyName: string;
    contactName: string;
    telphone: string;
    createdAt?: Date;
    updatedAt?: Date;
    address: Address[];
    
  }) {
    if (!props) return;

    this.id = props.id ? props.id : uuid();

    this.cnpj = props.cnpj;
    this.companyName = props.companyName;
    this.contactName = props.contactName;
    this.telphone = props.telphone;

    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;

    this.address = props.address;
  }
}
