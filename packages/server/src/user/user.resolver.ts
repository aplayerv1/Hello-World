import { UserEntity } from './user.entity';
import { Resolver, Query } from '@nestjs/graphql';

@Resolver('User')
export class UserResolver {

  @Query(() => UserEntity)
  userByID(): UserEntity[] {
    return [];
  }
}
