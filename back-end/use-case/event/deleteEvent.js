import { UseCaseError } from "../../utility/error-handling/useCaseError.js";

export function makeDeleteEvent(repository) {
    return async function deleteEvent({ id }) {
        try {
            const event = await repository.delete(id);
            return event;
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to delete event: {${id}}`,
                error
            });
        }
    }
}