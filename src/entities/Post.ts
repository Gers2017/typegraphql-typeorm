import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Entity,
  BaseEntity,
} from "typeorm";
import { Creator } from "./Creator";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity({ name: "posts" })
export class Post extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column()
  title!: string;

  @Field(() => String)
  @Column("varchar", { length: 160 })
  description!: string;

  @Field(() => Creator)
  @ManyToOne((type) => Creator, (creator) => creator.posts, {
    onDelete: "CASCADE",
  })
  creator!: Creator;
}
