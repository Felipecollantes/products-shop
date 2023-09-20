import { Mapper } from "src/app/core/mapper";
import { CategoryEntity } from "../entities/category-entity";
import { CategoryModel } from "src/app/domain/category/models/category.mode";

export class CategoryImplementationRepositoryMapper extends Mapper<CategoryEntity, CategoryModel> {
    mapFrom(param: CategoryEntity): CategoryModel {
      return { ...param };
    }
    mapTo(param: CategoryModel): CategoryEntity {
      return { ...param };
    }
  }
  