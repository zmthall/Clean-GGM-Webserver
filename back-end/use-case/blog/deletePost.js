import { UseCaseError } from "../../utility/error-handling/useCaseError.js";

export function makeDeletePost(repository) {
    return async function deletePost({ id }) {
        try {
            const newPost = await repository.delete(id);
            return newPost;
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to delete post: [${ id }]`,
                error
            });
        }
    }
}