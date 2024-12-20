import { User } from "../entities/User";
import hashString from "../utils/hashString";
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

  @Query(() => User, { nullable: true })
  async genUser(
    @Arg("username", () => String) username: string,
    @Arg("password", () => String) password: string
  ): Promise<User | null> {
    const hashedPassword = hashString(password);
    const user = await User.findOne({
      where: {
        username: username,
        encryptedPassword: hashedPassword,
      },
    });
    return user;
  }

  @Query(() => User, { nullable: true })
  async genUserByID(
    @Arg("user_id", () => String) user_id: string
  ): Promise<User | null> {
    const user = await User.findOneOrFail({
      where: {
        id: user_id,
      },
    });
    return user;
  }

  @Mutation(() => User)
  async registerUser(
    @Arg("firstName", () => String) firstName: string,
    @Arg("lastName", () => String) lastName: string,
    @Arg("username", () => String) username: string,
    @Arg("password", () => String) password: string
  ): Promise<User> {
    const hashedPassword = hashString(password);
    const user = new User(firstName, lastName, username, hashedPassword);
    return await user.save();
  }

  @Mutation(() => User)
  async login(
    @Arg("username", () => String) username: string,
    @Arg("password", () => String) password: string
  ): Promise<User> {
    const user = await this.genUser(username, password);
    if (user == null) {
      throw new Error("Incorrect login info");
    }
    return user;
  }
}
