import { UseCaseError } from "../../utility/error-handling/useCaseError.js";
import { archivedBlogPostValidation } from "../../entity/blog/blogPost.js";

export function makeArchivePost(repository) {
    return async function archivePost({ id }) {
        try {
            const blogPost = {
                ...(await repository.delete(id)),
                archive_date: (new Date()).toISOString()
            };

            if(blogPost.edited_date)
                delete blogPost.edited_date
            
            const result = await archivedBlogPostValidation(blogPost);

            const archivedBlogPost = await repository.archive(result);

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