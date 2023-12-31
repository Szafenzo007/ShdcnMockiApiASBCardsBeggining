export interface Product {
  createAt: Date;
  name: string ;
  avatar: string
  images: string;
  category : string;
  price: string;
  id:string;
};

export interface ClientData {
  id:string;
  createAt: Date;
  name: string ;
  DOB : Date;
  ward: string[];
  category : string;
  price: string;
  locations : string[] ;
  images: string;
  ASB : string;
  ASBLinks : string[];
  CPW: string;
  CPN: string;
  CPNDate : string;
  CPWDate : string;
  Region : "North" | "South"; 

};