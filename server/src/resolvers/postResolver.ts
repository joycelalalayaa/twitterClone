import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { UserResolver } from "./UserResolver";
import { Post } from "../entities/Post";

@Resolver()
export class PostResolver {
  @Mutation(() => Post)
  async createPost(
    @Arg("username", () => String) username: string,
    @Arg("password", () => String) password: string,
    @Arg("content", () => String) content: string
  ): Promise<Post> {
    const me = await new UserResolver().genUser(username, password);
    if (me == null) {
      throw new Error("need to be logged into post!");
    }
    const post = await new Post(content, me).save();
    return post;
  }

  @Mutation(() => Post)
  async deletePost(
    @Arg("username", () => String) username: string,
    @Arg("password", () => String) password: string,
    @Arg("post_id", () => String) post_id: string
  ): Promise<Post> {
    const me = await new UserResolver().genUser(username, password);
    if (me == null) {
      throw new Error("need to be logged into post!");
    }
    const post = await Post.findOneOrFail({
      where: {
        id: post_id,
      },
    });
    const author = await post.genAuthor();
    if (author.id !== me.id) {
      throw new Error("You can only delete your own posts");
    }
    await Post.delete(post.id);
    return post;
  }

  @Mutation(() => Post)
  async editPost(
    @Arg("username", () => String) username: string,
    @Arg("password", () => String) password: string,
    @Arg("post_id", () => String) post_id: string,
    @Arg("content", () => String) content: string
  ): Promise<Post> {
    const me = await new UserResolver().genUser(username, password);
    if (me == null) {
      throw new Error("need to be logged into post!");
    }
    const post = await Post.findOneOrFail({
      where: {
        id: post_id,
      },
    });
    const author = await post.genAuthor();
    if (author.id !== me.id) {
      throw new Error("You can only edit your own posts");
    }
    post.content = content;
    return await post.save();
  }

  @Query(() => [Post])
  async genAllPosts(): Promise<Post[]> {
    return await Post.find({ order: { updatedAt: "DESC" } });
  }
}
