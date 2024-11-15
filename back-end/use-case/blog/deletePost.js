import { UseCaseError } from "../../utility/error-handling/useCaseError.js";

export function makeDeletePost(repository) {
    return async function deletePost({ id }) {
        try {
            const deletedPost = await repository.delete(id);
            return deletedPost;
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to delete post: [${ id }]`,
                error
            });
        }
    }
}