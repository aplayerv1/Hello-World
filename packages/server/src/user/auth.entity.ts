import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class AuthEntity {
  @Field()
  valid: boolean
}
