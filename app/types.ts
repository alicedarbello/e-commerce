export interface Accessories {
  id: number;
  phone_model: string;
  name: string;
  price: number;
  currency: string;
  on_sale: boolean;
  image_uri: string;
  description: string;
}

export interface AccessoryContextType {
  accessories: Accessories[] | null;
  setAccessories: (accessories: Accessories[]) => void;
}
