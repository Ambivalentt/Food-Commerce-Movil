export interface Restaurant {
  path: string;
  name: string;
  deliveryTime?: string;
  freeDelivery?: boolean;
  bannerImage?: string;
  iconImage?: string;
}

export interface TemplateHomeProps {
  restaurant: Restaurant;
}