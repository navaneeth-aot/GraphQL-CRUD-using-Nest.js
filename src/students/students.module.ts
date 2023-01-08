import { Module } from '@nestjs/common';
import { StudentsService } from './services/students.service';
import { StudentsResolver } from './controller/students.resolver';
import { studentEntity } from './model/students.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { TeacherModule } from '../Teacher/Teacher.module';

@Module({
  imports: [TypeOrmModule.forFeature([studentEntity]),TeacherModule],
  providers: [StudentsService, StudentsResolver]
})
export class StudentsModule {}
