import { ObjectType, Field, Int } from '@nestjs/graphql';
import { studentEntity } from 'src/students/model/students.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('teacherTable')
@ObjectType()
export class Teacher {
  catch(Args: (err: any) => any) {
    throw new Error('Method not implemented.');
  }

  @PrimaryGeneratedColumn()
  @Field(type => Int)
  Id : number;

  @Column()
  @Field()
  Name : string;

  @OneToMany(type => studentEntity , student => student.teacher)
  @Field(type => [studentEntity])
  student : studentEntity[];
}
