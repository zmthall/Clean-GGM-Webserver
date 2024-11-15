import { UseCaseError } from "../../utility/error-handling/useCaseError.js";

export function makeGetAllEvents(repository) {
    return async function getAllEvents() {
        try {
            const events = await repository.getAll();
            return events;
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to get all events.`,
                error
            });
        }
    }
}