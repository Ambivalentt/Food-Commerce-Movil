
export interface ProductInterface {
    id: string;
    category?: string;
    details?: string;
    img?: string;
    ingredients?: string[]; // Puedes cambiar el tipo si los ingredientes son de otro tipo
    name?: string;
    price?: number;
    title?: string;
    type?: string;
  }

export interface Category{
  complementos:string;
  combo:string;
  loncherita:string;
  hamburguesa:string;
  bebida:string;
  helado:string;
  complemento?:string
}

export interface TemplateProductsByCategProps {
  category: string;
  products: ProductInterface[];
}