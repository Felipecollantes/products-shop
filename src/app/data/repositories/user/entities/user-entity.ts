export interface UserEntity {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
  creationAt: Date;
  updatedAt: Date;
}
