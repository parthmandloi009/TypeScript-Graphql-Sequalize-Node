import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize("users","parth","deq@123",{
    host:"localhost",
    dialect:"mysql"
})