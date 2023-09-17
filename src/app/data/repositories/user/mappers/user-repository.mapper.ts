import { UserModel } from 'src/app/domain/user/models/user.model';
import { UserEntity } from '../entities/user-entity';
import { Mapper } from 'src/app/base/mapper';

export class UserImplementationRepositoryMapper extends Mapper<
  UserEntity,
  UserModel
> {
  mapFrom(param: UserEntity): UserModel {
    return { ...param };
  }
  mapTo(param: UserModel): UserEntity {
    return { ...param };
  }
}
