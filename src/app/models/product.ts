export interface Product {
  id: number;
  itemName: string;
  madeFrom: string;
  desc: string;
  inStock?: boolean;
  imgPath?: string;
}
