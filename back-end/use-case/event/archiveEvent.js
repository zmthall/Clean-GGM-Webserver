import { ArchivedEvent } from "../../entity/event/event.js";
import { UseCaseError } from "../../utility/error-handling/useCaseError.js";

export function makeArchiveEvent(repository) {
    return async function archiveEvent({ id }) {
        try {
            const event = await repository.delete(id);
            const archivedEvent = await repository.archive(new ArchivedEvent(event));
            return archivedEvent;
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to archive event: {${id}}`,
                error
            });
        }
    }
}