import { UseCaseError } from "../../utility/error-handling/useCaseError.js";
import { BlogPost } from "../../entity/blog/blogPost.js";
import { nanoid } from "nanoid";

export function makeCreatePost(repository) {
    return async function createPost(newPostData) {
        newPostData ={
            ...newPostData,
            id: nanoid()
        }; // Insert new nanoid() id into newPostData
        try {
            const newPost = await repository.create(new BlogPost(newPostData));
            return newPost;
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to create post: [${ newPostData.id }]`,
                error
            });
        }
    }
}