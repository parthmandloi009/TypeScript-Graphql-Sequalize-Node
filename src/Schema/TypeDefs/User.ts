import {GraphQLObjectType,GraphQLID,GraphQLString, GraphQLInt} from "graphql";


export const UserType = new GraphQLObjectType({
    name:"User",
    fields: () =>({
        id:{type:GraphQLInt},   
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        gender:{type:GraphQLString},
        status:{type:GraphQLString}

    })
})