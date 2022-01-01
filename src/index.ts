import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import typeOrmConfig from "./typeOrmConfig";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { PostResolver } from "./resolvers/PostsResolver";
import { CreatorResolver } from "./resolvers/CreatorResolver";

const main = async () => {
  let connection: Connection | null = null;
  try {
    connection = await createConnection(typeOrmConfig);
  } catch (e) {
    console.error(e);
  }

  const schema = await buildSchema({
    resolvers: [PostResolver, CreatorResolver],
  });
  const server = new ApolloServer({ schema });
  await server.listen(4000).then(({ url }) => {
    console.log("Server has started: " + url);
  });

  if (!connection) return;

  console.log("Typeorm connected to database!");
};

main();
