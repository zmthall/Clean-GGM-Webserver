import Joi from "joi";

export async function schemaValidation(data, schema) {
    const { error, value } = schema.validate(data, {
        abortEarly: false, // show all validation errors, not just the first.
    });

    if(error) {
        // format errors for cleaner integration
        const errorMessages = error.details.map(detail => detail.message);
        const newError = new Error(`${errorMessages.join(' && ')}`);
        newError.status = 422; // invalid data status code
        newError.isJoi = true; // this error comes from the Joi validation
        throw newError;
    }

    return value; // return the sanitized and validated values
}