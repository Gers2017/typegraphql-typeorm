import { InputType, Field } from "type-graphql";

@InputType()
export class CreatePostInput {
  @Field()
  title!: string;
  @Field()
  description!: string;
  @Field()
  creatorId!: number;
}
