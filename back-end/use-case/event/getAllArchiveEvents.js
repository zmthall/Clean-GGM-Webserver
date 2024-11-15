import { UseCaseError } from "../../utility/error-handling/useCaseError.js";

export function makeGetAllArchiveEvents(repository) {
    return async function getAllArchiveEvents() {
        try {
            const events = await repository.getAll_archive();
            return events;
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to get all archived events.`,
                error
            });
        }
    }
}