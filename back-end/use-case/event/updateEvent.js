import { UseCaseError } from "../../utility/error-handling/useCaseError.js";

export function makeUpdateEvent(repository) {
    return async function updateEvent({ id }, newEventData) {
        try {
            const editedEvent = await repository.update(id, newEventData);
            
            return editedEvent;
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to update event: {${id}}`,
                error
            });
        }
    }
}