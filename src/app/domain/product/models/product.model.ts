import { CategoryModel } from "../../category/models/category.mode";

export interface ProductModel {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
  category: CategoryModel;
}

