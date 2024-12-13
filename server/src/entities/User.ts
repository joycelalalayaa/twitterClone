import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import "reflect-metadata";
import { Field, ObjectType } from "type-graphql";
import { Post } from "./Post";

@ObjectType()
@Entity()
export class User extends BaseEntity {
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
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column({ unique: true })
  username: string;

  @Column()
  encryptedPassword: string;

  @OneToMany(() => Post, (post) => post.author)
  posts!: Post[];

  @Field(() => [Post])
  async genPosts(): Promise<Array<Post>> {
    const user = await User.findOne({
      where: { id: this.id },
      relations: ["posts"],
    });

    return user?.posts ?? [];
  }

  constructor(
    firstName: string = "",
    lastName: string = "",
    username: string = "",
    password: string = ""
  ) {
    super();
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.encryptedPassword = password;
  }
}
