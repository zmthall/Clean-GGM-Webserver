import { Lead } from "../../entity/contact/lead.js";
import { UseCaseError } from "../../utility/error-handling/useCaseError.js";

export function makeCreateLead(repository) {
    return async function createLead(newLeadData) {
        try {
            const newLead = await repository.create(new Lead(newLeadData));
            return newLead;
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to create lead.`,
                error
            });
        }
    }
}