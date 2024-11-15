import { UseCaseError } from "../../utility/error-handling/useCaseError.js";

export function makeDeleteArchivePost(repository) {
    return async function deleteArchivePost({ id }) {
        try {
            const deletedArchivePost = await repository.delete_archive(id);
            return deletedArchivePost;
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to delete archived post: [${id}]`,
                error
            });
        }
    }
}