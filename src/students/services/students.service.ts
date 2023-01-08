import { Injectable, Options } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { TeacherService } from '../../Teacher/Teacher.service';
import { Repository } from 'typeorm';
import { Input } from '../dto/create-student';
import { studentEntity } from '../model/students.entity';
import { Teacher } from 'src/Teacher/entities/Teacher.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(studentEntity)
    private studentRepository: Repository<studentEntity>,
    private TeacherService : TeacherService
  ) {}

  async createStudent(Input: Input): Promise<studentEntity> {
    const newStudent = this.studentRepository.create(Input);

    try {
      const res = await this.studentRepository.save(newStudent);
      return res;
    } catch (err) {
      console.log(err.message);
    }
  }

  async findAll(): Promise<studentEntity[]> {
    return await this.studentRepository.find();
  }

  async findById(id : number ) : Promise<studentEntity> {
    return await this.studentRepository.findOneOrFail({where : {Id : id}});
  }

  async getTeacher(teacherId : number) : Promise<Teacher> {
    return await this.TeacherService.findOne(teacherId)
  }

  async updateStudent(id : number , input:any) : Promise<studentEntity> {
    const stud = await this.studentRepository.findOne({where : {Id:id}})

    if(stud) {
        await this.studentRepository.update(id,input);
        const updated = await this.studentRepository.findOne({where : {Id:id}})
        return updated;
    }
  }

  async deleteStudent(id : number) : Promise<studentEntity> {
    const stud = await this.studentRepository.findOne({where : {Id : id}})

    if(stud)
    await this.studentRepository.remove(stud);
    return stud;

  }
}
