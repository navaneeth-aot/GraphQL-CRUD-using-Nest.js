import { CreateTeacherInput } from './create-Teacher.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTeacherInput extends PartialType(CreateTeacherInput) {
  @Field(() => Int)
  id: number;
}
