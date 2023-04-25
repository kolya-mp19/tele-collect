import { PubSub } from 'graphql-subscriptions';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { UserService } from './user.service';
import { NotFoundException } from '@nestjs/common';
import { User } from './models/user.model';
import { UserArgs } from './dto/user.args';
import { NewUserInput } from './dto/new-user.input';

const pubSub = new PubSub();

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => User)
  async user(@Args('id') id: string): Promise<User> {
    const user = await this.userService.findOneById(id);
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
  }

  @Query((returns) => [User])
  users(@Args() usersArgs: UserArgs): Promise<User[]> {
    return this.userService.findAll(usersArgs);
  }

  @Mutation((returns) => User)
  async addUser(@Args('newUserData') newUserData: NewUserInput): Promise<User> {
    const user = await this.userService.create(newUserData);
    pubSub.publish('userAdded', { userAdded: user });
    return user;
  }

  @Mutation((returns) => Boolean)
  async removeUser(@Args('id') id: string) {
    return this.userService.remove(id);
  }

  @Subscription((returns) => User)
  userAdded() {
    return pubSub.asyncIterator('userAdded');
  }
}
