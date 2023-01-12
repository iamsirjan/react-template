export interface AddressProps {
    city:string;
  }
export interface CompanyProps {
    name:string;
}
export interface UserProps {
    id:number;  
    name: string;
    address: AddressProps;
    phone:number;
    email:string;
    company:CompanyProps;
    username:string;
  }

export interface SubmitUserProps {
    id:number;  
    name: string;
    address: string;
    phone:number;
    email:string;
    company:string;
    username:string;
}
