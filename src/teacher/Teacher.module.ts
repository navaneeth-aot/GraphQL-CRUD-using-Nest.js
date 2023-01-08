import { Module } from '@nestjs/common';
import { TeacherService } from './Teacher.service';
import { TeacherResolver } from './Teacher.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './entities/Teacher.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Teacher])],
  providers: [TeacherResolver, TeacherService],
  exports: [TeacherService]
})
export class TeacherModule {}
