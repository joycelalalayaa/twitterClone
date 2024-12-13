import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import 'reflect-metadata';
import { Field, ObjectType } from "type-graphql";
import { User } from "./User";


@ObjectType()
@Entity()
export class Post extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id!: string; // Use "!" to avoid TypeScript initialization errors

  @Field()
  @CreateDateColumn({ type: "timestamptz" })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ type: "timestamptz" })
  updatedAt: Date;

  @Field()
  @Column()
  content: string;

  @ManyToOne(()=> User, (user) => user.posts)
  @JoinColumn()
  author!: User

  constructor(
    content: string = " ", author: User|null = null
  ) {
    super();
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.content = content;
    if(author != null){
      this.author = author;
    }
  }
}
