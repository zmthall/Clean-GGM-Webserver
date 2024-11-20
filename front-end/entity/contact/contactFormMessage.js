import { EntityError } from "../../back-end/utility/error-handling/EntityError.js";
import { firstNameValidation, lastNameValidation, emailValidation, phoneNumberValidation, creationDateValidation } from "../../back-end/utility/validation/entityValidation.js";

export class ContactFormMessage {
    constructor({ reason, first_name, last_name, email, phone_number = null, preferred_contact_method, message, creation_date = (new Date()).toISOString()}) {
        if(this.validateReason(reason)) this.reason = reason;
        if(firstNameValidation(first_name)) this.first_name = first_name;
        if(lastNameValidation(last_name)) this.last_name = last_name;
        if(emailValidation(email)) this.email = email;
        if(phoneNumberValidation(phone_number)) this.phone_number = phone_number;
        if(this.validatePreferredContactMethod(preferred_contact_method)) this.preferred_contact_method = preferred_contact_method;
        if(this.validateMessage(message)) this.message = message;
        if(creationDateValidation(creation_date)) this.creation_date = creation_date;

        this.keys = Object.keys(this);

        Object.freeze(this);
    }

    // Reason must be a string and it cannot be empty.
    validateReason(reason) {
        if(!(typeof reason === 'string' && reason.length !== 0)) 
            throw new EntityError('Reason needs to be of type string and it cannot be empty or undefined.');

        return true;
    }

    // Preferred contact method must be a string and it cannot be empty/undefined.
    validatePreferredContactMethod(preferred_contact_method) {
        if(!(typeof preferred_contact_method === 'string' && preferred_contact_method.length !== 0)) 
            throw new EntityError('Preferred Contact Method needs to be of type string, and it cannot be empty or undefined.');

        return true;
    }

    // Message must be string, it cannot be empty/undefined, and it must be less than 1000 characters.
    validate(message) {
        if(!(typeof message === 'string' && message.length > 0 && message.length <= 1000)) 
            throw new EntityError('Message needs to be of type string, and it needs to be between 0 and 1000 characters in length.');

        return true;
    }
}