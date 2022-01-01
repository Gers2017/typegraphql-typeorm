import { Creator } from "../entities/Creator";
import { UpdateCreator } from "../inputs/UpdateCreator";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver(Creator)
export class CreatorResolver {
  @Query(() => [Creator])
  creators() {
    return Creator.find({ relations: ["posts"] });
  }

  @Query(() => Creator)
  async creator(@Arg("id") id: string) {
    return await Creator.findOne({ relations: ["posts"], where: { id } });
  }

  @Mutation(() => Creator)
  async addCreator(@Arg("username") username: string) {
    const creator = Creator.create({ username });
    return await creator.save();
  }

  @Mutation(() => Creator)
  async updateCreator(@Arg("id") id: number, @Arg("data") data: UpdateCreator) {
    const creator = await Creator.findOne({ where: { id } });
    if (!creator) throw new Error("No creator was found");
    creator.username = data.username;
    return await creator.save();
  }
}
