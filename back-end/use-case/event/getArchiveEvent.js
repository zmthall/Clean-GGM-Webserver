import { UseCaseError } from "../../utility/error-handling/useCaseError.js";

export function makeGetArchiveEvent(repository) {
    return async function getArchiveEvent({ id }) {
        try {
            const event = await repository.get_archive(id);
            return event;
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to get archive event: {${id}}`,
                error
            });
        }
    }
}