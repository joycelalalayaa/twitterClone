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
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column({ unique: true })
  username: string;

  @Column()
  encryptedPassword: string;

  constructor(
    firstName: string = "",
    lastName: string = "",
    username: string = "",
    password: string = ""
  ) {
    super();
    this.id = 0;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.encryptedPassword = password;
  }
}
