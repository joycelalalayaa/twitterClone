import { Arg, Mutation, Resolver } from "type-graphql";
import { UserResolver } from "./userResolver";
import { Post } from "../entities/Post";

@Resolver()
export class PostResolver {
  
  @Mutation(() => Post)
  async createPost(
    @Arg("username", () => String) username: string,
    @Arg("password", () => String) password: string,
    @Arg("content", () => String) content: string,
  ): Promise<Post> {
    const me = await new UserResolver().genUser(username, password);
    if(me == null){
      throw new Error("need to be logged into post!");
    }
    const post = await new Post(content, me).save();
    return post;
  }

}
