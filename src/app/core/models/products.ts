
export interface Item {
  barCode: string;
  description: string;
  expirationDate?: number;
  price: string;
  quantity: number;
}

export interface Product {
  [key: string]: Item;
}

export interface Products {
  barCode:string;
  description:string;
  price: number;
  quantity: number;
}
