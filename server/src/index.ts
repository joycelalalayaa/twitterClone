import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { AppDataSource } from "./AppDataSource";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/UserResolver";
import { PostResolver } from "./resolvers/PostResolver";

dotenv.config();
const port = process.env.PORT;

async function setupServer() {
  await AppDataSource.initialize();
  console.log("Data source has been initialized");
  const schema = await buildSchema({
    resolvers: [UserResolver, PostResolver],
  });
  const server = new ApolloServer({
    schema,
  });
  const { url } = await startStandaloneServer(server, {
    listen: { port: parseInt(port) },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

setupServer();
