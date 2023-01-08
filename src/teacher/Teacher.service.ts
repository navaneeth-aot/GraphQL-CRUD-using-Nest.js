import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeacherInput } from './dto/create-Teacher.input';
import { UpdateTeacherInput } from './dto/update-Teacher.input';
import { Teacher } from './entities/Teacher.entity';

@Injectable()
export class TeacherService {
  constructor(@InjectRepository(Teacher) private teacherRepository : Repository<Teacher> ) {}

  async create(createTeacherInput: CreateTeacherInput) {
    const newTeacher = this.teacherRepository.create(createTeacherInput);

    if(newTeacher){
      return await this.teacherRepository.save(newTeacher);
    }
    
  }

  async findAll() {
    return this.teacherRepository.find();
  }

  async findOne(id: number) {
    return await this.teacherRepository.findOneOrFail({where : {Id : id}});
  }

  async update(id: number, updateTeacherInput: UpdateTeacherInput) {
    const teacher = await this.teacherRepository.findOne({where : {Id:id}});

    if(teacher) {
        await this.teacherRepository.update(id,updateTeacherInput);
        const updated = await this.teacherRepository.findOne({where : {Id:id}});
        return updated;
    }
  }

  async remove(id: number) {
    const teacher = await this.teacherRepository.findOne({where : {Id : id}});

    if(teacher) {
    await this.teacherRepository.remove(teacher);
    return teacher;
    }
  }
}
