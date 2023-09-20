import { Observable } from 'rxjs';
import { CategoryModel } from '../models/category.mode';
export abstract class CategoryRepository {
  abstract getCategories(): Observable<CategoryModel[]>;

}
