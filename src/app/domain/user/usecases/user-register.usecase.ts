import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { UserModel } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';

export class UserRegisterUseCase
  implements UseCase<{ name: string; password: string; email: string; avatar: string }, UserModel>
{
  constructor(private userRepository: UserRepository) {}
  execute(params: { name: string; password: string; email: string; avatar: string }): Observable<UserModel> {
    return this.userRepository.register(params);
  }
}
