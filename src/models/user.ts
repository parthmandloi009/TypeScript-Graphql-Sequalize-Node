import {
  Model,
  Table,
  AutoIncrement,
  PrimaryKey,
  Column,
  AllowNull,
  NotEmpty,
} from "sequelize-typescript";

interface UserI {
  id?: number | null;
  name: string;
  email: string;
  gender: string;
  status: string;
}

@Table({
  tableName: "users",
  timestamps: true,
})

export default class Users extends Model implements UserI {

  @AutoIncrement
  @PrimaryKey
  @Column
  id?: number;

  @AllowNull(false)
  @NotEmpty
  @Column
  name: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  email: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  gender: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  status: string;
}
