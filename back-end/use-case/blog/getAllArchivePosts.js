import { UseCaseError } from "../../utility/error-handling/useCaseError.js";

export function makeGetAllArchivePosts(repository) {
    return async function getAllArchivePosts() {
        try {
            const posts = await repository.getAll_archive();
            return posts;
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to get all archived posts.`,
                error
            });
        }
    }
}