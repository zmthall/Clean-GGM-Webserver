export function makeUpdatePost(repository) {
    return async function updatePost({ id }, editData) {
        try {
            const editedPost = repository.update(id, editData);
            return editedPost
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to edit post: [${ id }]`,
                error
            });
        }
    }
}