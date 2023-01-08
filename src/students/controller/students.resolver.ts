import { Int, Resolver } from '@nestjs/graphql';
import { Args, Mutation, Parent, Query, ResolveField } from '@nestjs/graphql/dist/decorators';
import { find } from 'rxjs';
import { Teacher } from 'src/teacher/entities/Teacher.entity';
import { Input } from '../dto/create-student';
import { updateStudent } from '../dto/updateStudent';
import { studentEntity } from '../model/students.entity';
import { StudentsService } from '../services/students.service';

@Resolver((of) => studentEntity)
export class StudentsResolver {
    constructor(private StudentsService : StudentsService) {}

   
    @Query(returns => [studentEntity])
    students() : Promise<studentEntity[]> {
        try {
            return this.StudentsService.findAll();
        } catch (error) {
            return error.message
        }
    }

    @Query(returns => studentEntity)
    studentById(@Args('id', {type : () => Int}) id : number) : Promise<studentEntity> {
        return this.StudentsService.findById(id);
    }

    @ResolveField(returns => Teacher )
    owner(@Parent() student : studentEntity) : Promise<Teacher> { 
        return this.StudentsService.getTeacher(student.teacherId)
    }

    @Mutation(returns => studentEntity)
    createStudent(@Args('Input') Input : Input) : Promise<studentEntity> {
        return this.StudentsService.createStudent(Input);
    }

    @Mutation(returns => studentEntity)
    updateStudent(@Args('id') id : number , @Args('input') input : updateStudent) : Promise<studentEntity> {
        return this.StudentsService.updateStudent(id,input);
    }

    @Mutation(returns => studentEntity)
    deleteStudent(@Args('id') id : number) {
        return this.StudentsService.deleteStudent(id);
    }


}
