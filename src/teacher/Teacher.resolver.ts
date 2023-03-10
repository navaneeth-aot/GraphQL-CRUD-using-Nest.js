import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TeacherService } from './Teacher.service';
import { Teacher } from './entities/Teacher.entity';
import { CreateTeacherInput } from './dto/create-Teacher.input';
import { UpdateTeacherInput } from './dto/update-Teacher.input';

@Resolver(() => Teacher)
export class TeacherResolver {
  constructor(private readonly teacherService: TeacherService) {}

  @Mutation(() => Teacher)
  createTeacher(@Args('createTeacherInput') createTeacherInput: CreateTeacherInput) {
    return this.teacherService.create(createTeacherInput);
  }

  @Query(() => [Teacher], { name: 'teacher' })
  findAll() {
    return this.teacherService.findAll();
  }

  @Query(() => Teacher, { name: 'teacherByID' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.teacherService.findOne(id);
  }

  @Mutation(() => Teacher)
  updateTeacher(@Args('updateTeacherInput') updateTeacherInput: UpdateTeacherInput) {
    return this.teacherService.update(updateTeacherInput.id, updateTeacherInput);
  }

  @Mutation(() => Teacher)
  removeTeacher(@Args('id', { type: () => Int }) id: number) {
    return this.teacherService.remove(id);
  }
}
