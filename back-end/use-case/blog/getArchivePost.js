import { UseCaseError } from "../../utility/error-handling/useCaseError.js";

export function makeGetArchivePost(repository) {
    return async function getArchivePost({ id }) {
        try {
            const archivePost = await repository.get_archive(id);
            return archivePost;
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to get archived post: [${id}]`,
                error
            });
        }
    }
}