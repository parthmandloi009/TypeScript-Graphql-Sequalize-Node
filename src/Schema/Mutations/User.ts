import { GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";

import {Users} from "../../Entities/Users"
export const CREATE_USERS = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    gender: { type: GraphQLString },
    status: { type: GraphQLString },
  },
  resolve:async(parent: any, args: any) =>{
    const { name, email, gender, status } = args;
    await Users.insert({name,email,gender,status});
    return args;
    
},
};
