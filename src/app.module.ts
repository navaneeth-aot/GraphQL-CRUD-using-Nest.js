import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { TeacherModule } from './Teacher/Teacher.module';
import { studentEntity } from './students/model/students.entity';
import { Teacher } from './Teacher/entities/Teacher.entity';

@Module({
  imports: [GraphQLModule.forRoot({
    driver:ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gpl')
  }),
  TypeOrmModule.forRoot({
    type:'postgres',
    host : process.env.POSTGRES_HOST,
    port: parseInt(<string>process.env.POSTGRES_PORT),
    username: "postgres",
    password: "Navaneeth",
    database: 'students',
    entities: [ studentEntity , Teacher ],
    autoLoadEntities: true,
  }), StudentsModule, TeacherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
