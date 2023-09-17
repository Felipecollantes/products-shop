import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

export abstract class UserRepository {
  abstract login(params: {
    email: string;
    password: string;
  }): Observable<UserModel>;
  abstract register(params: {
    name: string;
    password: string;
    email: string;
    avatar: string;
  }): Observable<UserModel>;
  abstract getUserProfile(): Observable<UserModel>;
}
