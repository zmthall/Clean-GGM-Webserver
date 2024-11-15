import { UseCaseError } from "../../utility/error-handling/useCaseError.js";

export function makeGetEvent(repository) {
    return async function getEvent({ id }) {
        try {
            const event = await repository.get(id);
            return event;
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to get event: {${id}}`,
                error
            });
        }
    }
}