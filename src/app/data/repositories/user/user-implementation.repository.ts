import { Injectable } from '@angular/core';
import { UserRepository } from 'src/app/domain/user/repositories/user.repository';
import { UserImplementationRepositoryMapper } from './mappers/user-repository.mapper';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { UserModel } from 'src/app/domain/user/models/user.model';
import { UserEntity } from './entities/user-entity';
import { Store } from '@ngrx/store';
import { RootState } from '../../store';

export interface Token {
  access_token: string;
  refresh_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
  userMapper = new UserImplementationRepositoryMapper();
  apiUrl = 'https://api.escuelajs.co/api/v1';
  constructor(private http: HttpClient, private store: Store<RootState>) {
    super();
  }
  login(params: { email: string; password: string }): Observable<Token> {
    return this.http.post<Token>(`${this.apiUrl}/auth/login`, params);
  }

  logout() {
    localStorage.clear();
    return of(undefined);
  }
  register(params: { name: string; password: string; email: string; avatar: string }): Observable<UserModel> {
    return this.http.post<UserEntity>(`${this.apiUrl}/users/`, params).pipe(map(this.userMapper.mapFrom));
  }
  getUserProfile(): Observable<UserModel> {
    return this.http.get<UserEntity>(`${this.apiUrl}/auth/profile`).pipe(map(this.userMapper.mapFrom));
  }
}
