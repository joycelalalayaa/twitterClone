import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import "reflect-metadata";
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

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn()
  author!: User;

  @Field(() => User)
  async genAuthor(): Promise<User> {
    const post = await Post.findOne({
      where: { id: this.id },
      relations: ["author"],
    });

    if (!post || !post.author) {
      throw new Error("Author not found");
    }

    return post.author;
  }

  constructor(content: string = " ", author: User | null = null) {
    super();
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.content = content;
    if (author != null) {
      this.author = author;
    }
  }
}
