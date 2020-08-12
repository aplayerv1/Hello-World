import { ConfigService } from './config/config.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: new ConfigService().get('DB_URL'),
      port: +new ConfigService().get('DB_PORT'),
      username: 'root',
      password: new ConfigService().get('SQL_PASSWORD'),
      database: 'mvia',
      autoLoadEntities: true,
      synchronize: false,
      logging: true,
      retryAttempts: 0
    }),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
