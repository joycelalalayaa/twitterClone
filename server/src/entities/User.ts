import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import 'reflect-metadata';
import { Field, ObjectType } from "type-graphql";
import { Post } from "./Post";


@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id!: string; // Use "!" to avoid TypeScript initialization errors

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

  @OneToMany(()=>Post, (post) => post.author)
  posts!: Post[];

  constructor(
    firstName: string = "",
    lastName: string = "",
    username: string = "",
    password: string = ""
  ) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.encryptedPassword = password;
  }
}
