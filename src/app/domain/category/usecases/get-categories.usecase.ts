import { Observable } from "rxjs";
import { UseCase } from "../../base/use-case";
import { CategoryModel } from "../models/category.mode";
import { CategoryRepository } from "../repositories/category.repository";

export class GetCategoriesUseCase implements UseCase<void, CategoryModel[]> {
    constructor(private categoryRepository: CategoryRepository) {}
    execute(): Observable<CategoryModel[]> {
      return this.categoryRepository.getCategories();
    }
  }