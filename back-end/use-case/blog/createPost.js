import { UseCaseError } from "../../utility/error-handling/useCaseError.js";
import { blogPostValidation } from "../../entity/blog/blogPost.js";
import { nanoid } from "nanoid";

export function makeCreatePost(repository) {
    return async function createPost(newPostData) {
        try {
            let result = await blogPostValidation(newPostData);
            result = {
                id: nanoid(),
                ...result,
                creation_date: (new Date()).toISOString()
            }

            const newPost = await repository.create(result);
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