import { AuthEntity } from './auth.entity';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { LoginInput } from './user.dto';
import { UnauthorizedException } from '@nestjs/common';

@Resolver('User')
export class UserResolver {
  constructor(
    private userService: UserService
  ) { }

  @Query(() => [UserEntity])
  user(): Promise<UserEntity[]> {
    return this.userService.getUser('');
  }

  @Mutation(() => AuthEntity)
  async login(@Args('login') { username, password }: LoginInput): Promise<AuthEntity> {
    const user = await this.userService.getUser(username);

    if (user.length > 0) {
      if (user[0].password === password) {
        return {
          valid: true
        } as AuthEntity;
      } else {
        throw new UnauthorizedException();
      }
    } else {
      throw new UnauthorizedException();
    }
  }
}
