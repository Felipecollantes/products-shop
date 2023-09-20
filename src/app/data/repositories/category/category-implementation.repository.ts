import { Injectable } from '@angular/core';
import { CategoryRepository } from 'src/app/domain/category/repositories/category.repository';
import { CategoryImplementationRepositoryMapper } from './mappers/category.repository.mapper';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { RootState } from '../../store';
import { Observable, map } from 'rxjs';
import { CategoryModel } from 'src/app/domain/category/models/category.mode';
import { CategoryEntity } from './entities/category-entity';

@Injectable({
  providedIn: 'root',
})
export class CategoryImplementationRepository extends CategoryRepository {
  categoryMapper = new CategoryImplementationRepositoryMapper();
  apiUrl = 'https://api.escuelajs.co/api/v1/';
  constructor(private http: HttpClient, private store: Store<RootState>) {
    super();
  }
  getCategories(): Observable<CategoryModel[]> {
    return this.http
      .get<CategoryEntity[]>(`${this.apiUrl}categories`)
      .pipe(
        map((response: CategoryEntity[]) => response.map((item) => this.categoryMapper.mapFrom(item)))
      ) as Observable<CategoryModel[]>;
  }
}
