import { v4 as uuid} from "uuid";


export class Address {
  readonly id?: string
  readonly costumer_id?: string
  readonly street: string;
  readonly number: string;
  readonly city: string;
  readonly state: string;
  readonly district: string;
  readonly zipCode: string;
  readonly complement?: string;
  readonly latitude: number | null;
  readonly longitude: number | null;

  constructor(props: {
    id?: string
    costumer_id?: string
  
    street: string;
    number: string;
    city: string;
    state: string;
    district: string;
    zipCode: string;
    complement?: string;
    latitude: number | null; 
    longitude: number | null 
  }) {
    if (!props.zipCode) return 

    this.id = props.id ? props.id : uuid()
    this.costumer_id = props.costumer_id ? props.costumer_id : null
    this.street = props.street;
    this.number = props.number;
    this.city = props.city;
    this.state = props.state;
    this.district = props.district;
    this.zipCode = props.zipCode;
    this.complement = props.complement;
    this.latitude = props.latitude;
    this.longitude = props.longitude;
  }
}
