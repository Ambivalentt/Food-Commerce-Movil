export interface ProductInterface {
  id: string;
  category?: string;
  details?: string;
  img?: string;
  ingredients?: string[]; // Puedes cambiar el tipo si los ingredientes son de otro tipo
  name: string;
  price: number;
  title?: string;
  type?: string;
}

export interface CartComeplements{
  id: string; 
  name: string; 
  price: number; 
  quantity: number;
  img:string;
  details:string;
}

export interface CartProviderTemporal {
  id: string; 
  baseProduct: ProductInterface; 
  quantity: number; 
  time:string;
  selectedComplements: CartComeplements[]; 
};

export interface CartProviderFinal {
  id: string; 
  price: number;
  baseProduct: ProductInterface; 
  quantity: number; 
  time:string;
  selectedComplements: ProductInterface[]; 

}[]

export interface CartContextProps {
  cartProducts: CartProviderFinal[];
  setCartProducts: (product: CartProviderFinal[]) => void;
  totalPrice: number;
  cartProductsTemporal: CartProviderTemporal | undefined;
  setCartProductsTemporal: (product: CartProviderTemporal | undefined) => void;
  totalPriceFinal?:number;
  setTotalPriceFinal?: (price:number) => void;
}