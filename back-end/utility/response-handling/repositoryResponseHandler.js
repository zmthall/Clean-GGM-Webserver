import { RepositoryError } from "../error-handling/frameworkError.js";

export async function repositoryResponseHandler(repositoryFunc) {
    try {
        const result = await repositoryFunc();
        return result;
    } catch (error) {
        console.error(error.message);
        throw new RepositoryError({
            message: 'Could not handle controller response.',
            error
        });
    }
}