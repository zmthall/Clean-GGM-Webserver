import { EntityError } from "../../utility/error-handling/EntityError";
import { contentValidation } from "../../utility/validation/entityValidation";
import 'dotenv/config';

export class Command {
    static TYPES = process.env.COMMAND_TYPES ? process.env.COMMAND_TYPES.split(', ').map(type => type.toUpperCase()).filter(Boolean) : ['UTILITY', 'AESTHETIC'];
    constructor({ name, description = null, type, values = null}) {
        if(this.validateName(name)) this.name = name;
        if(description && contentValidation(description, 'Command Description', 1, 250)) this.description = description;
        if(this.validateType(type)) this.type = type.toUpperCase(); // Normalizing type to upperCase.
        if(values && this.validateValues(values)) this.values = values;

    }

    // Name needs to be a string and it cannot be empty or undefined
    validateName(name) {
        if(!(typeof name === 'string' && name.length > 0))
            throw new EntityError('Name needs to be of type string and it cannot be empty or undefined.');

        return true;
    }

    // Type needs to be a string and it cannot be empty or undefined.
    // Type needs to be an allowed command type
    validateType(type) {
        if(!(typeof type === 'string' && type.length > 0 && Command.TYPES.includes(type.toUpperCase())))
            throw new EntityError(`Type needs to be of type string and it cannot be empty or undefined. The value of type must be one of the following: ${Command.TYPES.join(', ').toUpperCase()}.`);
            
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