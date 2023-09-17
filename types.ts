export interface Product {
  createAt: Date;
  name: string ;
  avatar: string
  images: string;
  category : string;
  price: string;
  id:string;
};

export interface Clients {
  id:string;
  createAt: Date;
  name: string ;
  DOB : Date;
  ward: string[];
  locations : string[] ;
  images: string[];
  ASB : string;
  ASBLinks : string[];
  CPW: string;
  CPN: string;
  CPNDate : string;
  CPWDate : string;
  Region : "North" | "South"; 

};