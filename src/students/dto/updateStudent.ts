import { Int, PartialType } from "@nestjs/graphql";
import { Field, InputType } from "@nestjs/graphql/dist/decorators";
import { Input } from "./create-student";

@InputType()
export class updateStudent extends PartialType(Input) {
    
  }
    
