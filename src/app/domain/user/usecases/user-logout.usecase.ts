import { Observable } from "rxjs";
import { UseCase } from "../../base/use-case";
import { UserModel } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";

export class UserLogoutUseCase implements UseCase<void, void> {
    constructor(private userRepository: UserRepository) {}
    execute():Observable<void> {
      return this.userRepository.logout();
    }
  }
  