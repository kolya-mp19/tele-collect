import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'user ' })
export class User {
  @Field()
  id: number;

  @Field()
  email: string;

  @Field()
  name: string;
}
