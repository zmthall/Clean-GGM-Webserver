import { UseCaseError } from "../../utility/error-handling/useCaseError.js";
import { nanoid } from "nanoid";

export function makeCreatePost(repository) {
    return async function createPost(newPostData) {
        newPostData ={
            ...newPostData,
            id: nanoid()
        };
        try {
            const newPost = await repository.create(newPostData);
            return newPost;
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to create post: [${ newPostData.id }]`,
                status: error.status || 500,
                error
            });
        }
    }
}