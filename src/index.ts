import express from "express";
import cors from "cors";
import { schema } from "./Schema";
import { graphqlHTTP } from "express-graphql";
import { createConnection } from "typeorm";
import swaggerJsDoc  from "swagger-jsdoc";
import swaggerUi  from "swagger-ui-express";
import { Users } from "./Entities/Users";

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

  const swaggerOptions: any = {
    swaggerDefinition: {
      info: {
        title: "User Apis",
        description: "Customer API Information",
        contact: {
          name: "Parth",
        },
        servers: ["http://localhost:3002"],
      },
    },
    apis: ["index.ts"],
  };

  const swaggerDocs: any = swaggerJsDoc(swaggerOptions);

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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
  console.log("++++++", err);
});
