import { UseCaseError } from "../../utility/error-handling/useCaseError.js";

export function makeGetAllArchiveEvents(repository) {
    return async function getAllArchiveEvents() {
        try {
            const archiveEvents = await repository.getAll_archive();
            return archiveEvents;
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to get all archived events.`,
                error
            });
        }
    }
}