import { Field, InputType } from "type-graphql";

@InputType()
export class UpdateCreator {
  @Field()
  username!: string;
}
