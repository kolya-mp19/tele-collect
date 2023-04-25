import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';
import { NewUserInput } from './dto/new-user.input';
import { UserArgs } from './dto/user.args';

@Injectable()
export class UserService {
  async create(data: NewUserInput): Promise<User> {
    return {} as any;
  }

  async findOneById(id: string): Promise<User> {
    return {} as any;
  }

  async findAll(usersArgs: UserArgs): Promise<User[]> {
    return [] as User[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
