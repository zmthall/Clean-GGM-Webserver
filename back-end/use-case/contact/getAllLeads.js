import { UseCaseError } from "../../utility/error-handling/useCaseError.js";

export function makeGetAllLeads(repository) {
    return async function getAllLeads() {
        try {
            const leads = await repository.getAll();
            return leads;
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to get all leads.`,
                error
            });
        }
    }
}