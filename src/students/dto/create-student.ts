import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class Input { 
    
    @Field()
    firstName ?: string
 
    @Field()
    secondName ?: string

    @Field(type => Int)
    physics ?: number

    @Field(type => Int)
    maths ?: number

    @Field(type => Int)
    teacherId ?: number
}

