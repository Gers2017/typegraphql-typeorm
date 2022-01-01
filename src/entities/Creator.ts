import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Post } from "./Post";

@Entity({ name: "creators" })
@ObjectType()
export class Creator extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column("varchar", { length: 120 })
  username!: string;

  @Field(() => [Post]) // define many posts
  @OneToMany((type) => Post, (post) => post.creator, {
    cascade: true,
    onDelete: "CASCADE",
  })
  posts: Post[];
}
