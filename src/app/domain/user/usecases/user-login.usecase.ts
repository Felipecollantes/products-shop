import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { UserModel } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';
import { Token } from 'src/app/data/repositories/user/user-implementation.repository';

export class UserLoginUseCase implements UseCase<{ email: string; password: string }, Token> {
  constructor(private userRepository: UserRepository) {}
  execute(params: { email: string; password: string }): Observable<Token> {
    return this.userRepository.login(params);
  }
}
