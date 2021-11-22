import { GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/User";
//import {Users} from "../../Entities/Users"
import Users from "../../models/user"

export const GET_ALL_USERS={
    type:new GraphQLList(UserType),
    resolve(){
    return Users.findAll();
    } 
}