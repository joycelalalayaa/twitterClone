import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import 'reflect-metadata';
import { Field, ObjectType } from "type-graphql";


@ObjectType()
@Entity()
export class User extends BaseEntity{

  @Field(() => String)
  @PrimaryGeneratedColumn()
  id!: number; // Use "!" to avoid TypeScript initialization errors

  @Field()
  @Column()
  firstName!: string;
  
  @Field()
  @Column()
  lastName!: string;

  @Field()
  @Column()
  age!: number;
}
