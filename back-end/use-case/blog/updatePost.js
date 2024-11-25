import { editBlogPostValidation } from "../../entity/blog/blogPost.js";
import { UseCaseError } from "../../utility/error-handling/useCaseError.js";

export function makeUpdatePost(repository) {
    return async function updatePost({ id }, editData) {
        try {
            editData = {
                ...editData,
                edited_date: (new Date()).toISOString()
            };
            
            const result = await editBlogPostValidation(editData);
            const editedPost = await repository.update(id, result);
            return editedPost;
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to edit post: [${ id }]`,
                error
            });
        }
    }
}