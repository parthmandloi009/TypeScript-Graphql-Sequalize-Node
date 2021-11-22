import express, { Application } from "express"
import cors from "cors";
import { schema } from "./Schema";
import { graphqlHTTP } from "express-graphql";
import { createConnection } from "typeorm";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { sequelize } from "./config/db";

const main = async () => {


  sequelize.authenticate().then(async ()=>{

    try{
      await sequelize.sync()
    }catch(error){
      
    }
    console.log("Database connected.");
  }).catch((error)=>{
    console.log(error);
    
  })
  const app:Application = express();
  app.use(cors());
  app.use(express.json());

  const swaggerOptions: any = {
    swaggerDefinition: {
      info: {
        title: "User Apis",
        description: "Customer API Information",
        contact: {
          email:"pmandloi@deqode.com"
        },
        liscence:{
          name:"Apache 2.0",
          url: "http://apache.org/"
        },
        servers: ["http://localhost:8888"]
      },
    },
    apis: ["./src/index.ts"],
  };

  const swaggerDocs: any = swaggerJsDoc(swaggerOptions);

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

  /**
   * @swagger
   * /graphqls:
   *  get:
   *    description: Use to request all request
   *    responses:
   *      '200':
   *       description: A Successfull response
   *       schema:
   *         type: array
   *
   */

  /**
   * @swagger
   * /graphqls:
   *  put:
   *    description: Use to request all request
   *    responses:
   *      '200':
   *       description: A Successfull response
   *
   */
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );
  app.listen(8888, () => {
    console.log("Server running on port 8888");
  });
};

main().catch((err) => {
  console.log("++++++", err);
});
