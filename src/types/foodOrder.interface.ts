export interface IFoodOrder {
  name: string;
  isAvailable: boolean;
  category: Category;
  price: number;
  srcImage: string;
  description: string;
  id: number;
}

type Category =
  | ""
  | "Meat"
  | "Dessert"
  | "Seafood"
  | "Chicken"
  | "Breakfast"
  | "Coffee";

export interface ICartItems extends IFoodOrder {
  quantity: number;
}
