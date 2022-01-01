import { InputType, Field } from "type-graphql";

@InputType()
export class UpdatePostInput {
  @Field({ nullable: true })
  title!: string;
  @Field({ nullable: true })
  description!: string;
  @Field({ nullable: true })
  creatorId!: number;
}
