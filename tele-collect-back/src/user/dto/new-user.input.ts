import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewUserInput {
  @Field()
  email: string;

  @Field()
  name: string;
}
