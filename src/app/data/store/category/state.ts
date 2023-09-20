import { CategoryModel } from "src/app/domain/category/models/category.mode";

export interface CategoryState {
    categories: CategoryModel[];
  }
  
  export const initialState: CategoryState = {
    categories: [],
  };