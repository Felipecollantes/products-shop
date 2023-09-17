import { Injectable } from '@angular/core';
import { UserRepository } from 'src/app/domain/user/repositories/user.repository';
import { UserImplementationRepositoryMapper } from './mappers/user-repository.mapper';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { UserModel } from 'src/app/domain/user/models/user.model';
import { UserEntity } from './entities/user-entity';

@Injectable({
  providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
  userMapper = new UserImplementationRepositoryMapper();
  constructor(private http: HttpClient) {
    super();
  }
  login(params: { email: string; password: string }): Observable<UserModel> {
    return this.http
      .post<UserEntity>('https://api.escuelajs.co/api/v1/auth/login', {
        params,
      })
      .pipe(map(this.userMapper.mapFrom));
  }
  register(params: {
    name: string;
    password: string;
    email: string;
    avatar: string;
  }): Observable<UserModel> {
    return this.http
      .post<UserEntity>('https://api.escuelajs.co/api/v1/users/', { params })
      .pipe(map(this.userMapper.mapFrom));
  }
  getUserProfile(): Observable<UserModel> {
    return this.http
      .get<UserEntity>('https://api.escuelajs.co/api/v1/auth/profile')
      .pipe(map(this.userMapper.mapFrom));
  }
}
