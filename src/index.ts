import express from "express";
import cors from "cors";
import { schema } from "./Schema";
import { graphqlHTTP } from "express-graphql";
import { createConnection } from "typeorm";
import {Users} from "./Entities/Users"

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "users",
    username: "parth",
    password: "deq@123",
    logging: true,
    synchronize: false,
    entities: [Users],
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );
  app.listen(3002, () => {
    console.log("Server running on port 3002");
  });
};

main().catch((err) => {
  console.log("++++++",err);
});
