import { UserEntity } from '@prisma/client';

export type UserType = Omit<UserEntity, 'password'>;
