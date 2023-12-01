import { ProductInterface, CartProviderFinal, CartProviderTemporal } from "../Context/InterfaceCart";

export interface OrdersProps {
    id:string;
    product:CartProviderFinal[];
    date:string;
    status:string,
    total:number,
}[]