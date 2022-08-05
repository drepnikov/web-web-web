import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/modules/user/dto/createUser.dto';
import { PrismaService } from 'src/prisma.service';
import { hash } from 'bcrypt';
import { UserResponseInterface } from 'src/modules/user/types/user-response.interface';
import { UserType } from 'src/modules/user/types/user.type';
import { sign } from 'jsonwebtoken';
import { JWT_SECRET } from 'src/environment/config';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserType> {
    const emailIsTaken = await this.prismaService.userEntity.findFirst({
      where: { email: createUserDto.email },
    });

    if (emailIsTaken) {
      throw new HttpException(
        'Email or username are taken',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const usernameIsTaken = await this.prismaService.userEntity.findFirst({
      where: { username: createUserDto.username },
    });

    if (usernameIsTaken) {
      throw new HttpException(
        'Email or username are taken',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const newUser = await this.prismaService.userEntity.create({
      data: {
        ...createUserDto,
        password: await this.hashPassword(createUserDto.password),
      },
      select: { email: true, image: true, username: true, bio: true, id: true },
    });

    return newUser;
  }

  private async hashPassword(password: string): Promise<string> {
    return hash(password, 10);
  }

  buildResponse(user: UserType): UserResponseInterface {
    return {
      user: {
        ...user,
        token: this.generateJwt(user),
      },
    };
  }

  generateJwt(user: UserType) {
    return sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      JWT_SECRET,
    );
  }
}
