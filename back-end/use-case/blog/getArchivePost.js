import { UseCaseError } from "../../utility/error-handling/useCaseError.js";

export function makeGetArchivePost(repository) {
    return async function getArchivePost({ id }) {
        try {
            const post = await repository.get_archive(id);
            return post;
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to get archived post: [${id}]`,
                error
            });
        }
    }
}