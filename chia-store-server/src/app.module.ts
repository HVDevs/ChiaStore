import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './users/user/auth/auth.module';
import { UserModule } from './users/user/user.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: '31.187.76.251',
        port: parseInt(process.env.PORT) || 3306,
        username: 'mati',
        password: '123456',
        database: 'matidb',
        entities: [__dirname + process.env.ENTITIES, __dirname + process.env.MODELS],
        synchronize: true,
      }),
    }),
    ProductsModule,
    UsersModule,
    UserModule,
    AuthModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
