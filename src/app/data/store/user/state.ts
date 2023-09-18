import { ProductModel } from 'src/app/domain/product/models/product.model';
import { UserModel } from 'src/app/domain/user/models/user.model';
import { Token } from '../../repositories/user/user-implementation.repository';

export interface UserState {
  user: UserModel | null;
  accessToken: Token | null;
  loading: boolean;
}

export const initialState: UserState = {
  user: null,
  accessToken: null,
  loading: false,
};
