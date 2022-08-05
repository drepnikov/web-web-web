import { UserEntity } from '@prisma/client';

export interface UserResponseInterface {
  user: Omit<UserEntity, 'password'> & { token: string };
}
