import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { Token } from 'src/app/data/repositories/user/user-implementation.repository';

export abstract class UserRepository {
  abstract login(params: { email: string; password: string }): Observable<Token>;
  abstract register(params: { name: string; password: string; email: string; avatar: string }): Observable<UserModel>;
  abstract getUserProfile(): Observable<UserModel>;
}
