import { User } from "../entities/User";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class UserResolver {

    @Query(() => Number)
    async addNumbers(
        @Arg('a', () => Number) a: number,
        @Arg('b', () => Number) b: number
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
        @Arg('firstName', () => String)firstName: string, 
        @Arg('lastName', () => String)lastName: string, 
        @Arg('age', () => Int) age: number
    ): Promise<User> {
        const user = new User();
        user.firstName = firstName;
        user.lastName = lastName;
        user.age = age;
        return await user.save();
    }
}
