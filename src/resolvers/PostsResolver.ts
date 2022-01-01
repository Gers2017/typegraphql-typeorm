import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Post } from "../entities/Post";
import { CreatePostInput } from "../inputs/CreatePost";
import { UpdatePostInput } from "../inputs/UpdatePost";

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  posts() {
    return Post.find();
  }

  @Query(() => Post)
  post(@Arg("id") id: number) {
    return Post.findOne({ where: { id } });
  }

  @Mutation(() => Post)
  async createPost(@Arg("data") data: CreatePostInput) {
    const post = Post.create(data);
    await post.save();
    return post;
  }

  @Mutation(() => Post)
  async updatePost(@Arg("id") id: number, @Arg("data") data: UpdatePostInput) {
    const post = await Post.findOne({ where: { id } });
    if (!post) throw new Error("Post not found!");
    Object.assign(post, data);
    await post.save();
    return post;
  }

  @Mutation(() => Boolean)
  async deletePost(@Arg("id") id: number) {
    const post = await Post.findOne({ where: { id } });
    if (!post) throw new Error("Post not found!");
    await post.remove();
    return true;
  }
}
