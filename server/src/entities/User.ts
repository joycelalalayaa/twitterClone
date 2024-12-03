import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import 'reflect-metadata';
import { Field, ObjectType } from "type-graphql";


@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn()
  id: number; // Use "!" to avoid TypeScript initialization errors

  @Field()
  @Column({unique: true})
  username: string;

  @Field()
  @Column()
  password: string;

  constructor(username: string = '', password: string = ''){
    super();
    this.id = 0;
    this.username = username;
    this.password = password;
  }

}
