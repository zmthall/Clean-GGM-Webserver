import { EntityError } from "../../utility/error-handling/EntityError";
import { contentValidation } from "../../utility/validation/entityValidation";
import 'dotenv/config';

export class APIRequest {
    constructor({ request, description = null, values = null}) {
        if(this.validateRequest(request)) this.request = request;
        if(description && contentValidation(description, 'Request Description', 1, 250)) this.description = description; // this is specifically for logging purposes and is not necessary but can be helpful.
        if(this.validateType(type)) this.type = type.toUpperCase(); // Normalizing type to upperCase.
        if(values && this.validateValues(values)) this.values = values; // This is specific to requests that need additional values to fulfill functionality.
    }

    // Request needs to be a string and it cannot be empty or undefined
    validateRequest(request) {
        if(!(typeof request === 'string' && request.length > 0))
            throw new EntityError('request needs to be of type string and it cannot be empty or undefined.');

        return true;
    }

    // Values can either be a single string value or an array of strings.
    // Values strings cannot be empty or undefined
    validateValues(values) {
        if(typeof values === 'string')
            if(!(values.length > 0))
                throw new EntityError('Values must be string value and it cannot be empty or undefined.');

        if(Array.isArray(values))
            if(!(values.every(value => typeof value === 'string' && value.length !== 0)))
                throw new EntityError('Values array cannot be empty, each value needs to be of type string and they also cannot be empty or undefined.');

        return true;
    }
}