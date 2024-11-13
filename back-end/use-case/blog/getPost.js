import { UseCaseError } from "../../utility/error-handling/useCaseError.js";

export function makeGetPost(repository) {
    return async function getPost({ id }) {
        try {
            const post = await repository.get(id);
            return post;
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to get post: [${ id }]`,
                error
            });
        }
    }
}