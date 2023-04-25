import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'user ' })
export class User {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  name: string;
}
