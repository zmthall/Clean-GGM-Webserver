import { UseCaseError } from "../../utility/error-handling/useCaseError.js";

export function makeGetAllPosts(repository) {
    return async function getAllPosts() {
        try {
            const posts = await repository.getAll();
            return posts;
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to get all posts.`,
                error
            });
        }
    }
}