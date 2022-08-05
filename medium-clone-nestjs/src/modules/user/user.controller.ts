import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/modules/user/dto/createUser.dto';
import { UserService } from 'src/modules/user/user.service';
import { UserResponseInterface } from 'src/modules/user/types/user-response.interface';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users')
  @UsePipes(new ValidationPipe())
  async createUser(
    @Body('user') createUserDto: CreateUserDto,
  ): Promise<UserResponseInterface> {
    const newUser = await this.userService.createUser(createUserDto);

    return this.userService.buildResponse(newUser);
  }
}
