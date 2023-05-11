import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewUserInput } from './dto/new-user.input';
import { UserArgs } from './dto/user.args';
import { UserEntity } from './entity/user.entity';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(newUserInput: NewUserInput): Promise<User> {
    const createdUser = this.userRepository.create(newUserInput);
    return (await this.userRepository.save(createdUser)).toResponse();
  }

  async findOneById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (user) {
      return user.toResponse();
    }

    throw new NotFoundException('User not found');
  }

  async findAll(params: UserArgs): Promise<User[]> {
    const { skip, take } = params;
    const users = await this.userRepository.find({ skip, take });
    return users.map((_) => _.toResponse());
  }

  async remove(id: number): Promise<boolean> {
    const response = await this.userRepository.delete(id);

    return response.affected !== 0;
  }
}
