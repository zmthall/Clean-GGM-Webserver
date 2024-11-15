import { UseCaseError } from "../../utility/error-handling/useCaseError.js";

export function makeArchivePost(repository) {
    return async function archivePost({ id }) {
        try {
            const blogPost = await repository.delete(id);
            const archivedBlogPost = await repository.archive(blogPost);

            return archivedBlogPost;
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to archive post: [${ id }]`,
                error
            });
        }
    }
}