import { CategoryEntity } from "../../category/entities/category-entity";

export interface ProductEntity {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
  category: CategoryEntity;
}

