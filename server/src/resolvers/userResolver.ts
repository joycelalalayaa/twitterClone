import { User } from "../entities/User";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class UserResolver {
  @Query(() => Number)
  async addNumbers(
    @Arg("a", () => Number) a: number,
    @Arg("b", () => Number) b: number
  ): Promise<number> {
    return a + b;
  }

  @Query(() => [User])
  async genAllUsers(): Promise<User[]> {
    const users = await User.find({});
    return users;
  }

  @Mutation(() => User)
  async createUser(
    @Arg("username", () => String) username: string,
    @Arg("password", () => String) password: string
  ): Promise<User> {
    const user = new User(username, password);
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    return await user.save();
  }
}
