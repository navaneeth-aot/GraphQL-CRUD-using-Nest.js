import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Teacher } from "src/teacher/entities/teacher.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('studentstable')
@ObjectType()
export class studentEntity {
    catch(Args: (err: any) => any) {
        throw new Error('Method not implemented.');
    }

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    Id : number;
    
    @Column()
    @Field()
    firstName : string;

    @Column()
    @Field()
    secondName : string;
    
    @Column()
    @Field(type => Int)
    physics : number;
    
    @Column()
    @Field(type => Int)
    maths : number;

    @Column()
    @Field(type => Int)
    teacherId : number;

    @ManyToOne(type => Teacher, teacher => teacher.student)
    @Field(type => Teacher)
    teacher: Teacher;
}