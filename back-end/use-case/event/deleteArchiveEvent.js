import { UseCaseError } from "../../utility/error-handling/useCaseError.js";

export function makeDeleteArchiveEvent(repository) {
    return async function deleteArchiveEvent({ id }) {
        try {
            const event = await repository.delete_archive(id);
            return event;
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to delete archive event: {${id}}`,
                error
            });
        }
    }
}