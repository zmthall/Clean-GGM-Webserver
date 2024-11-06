import { EntityError } from "../../utility/error-handling/EntityError.js";
import { emailValidation, phoneNumberValidation } from "../../utility/validation/entityValidation.js";

export class ContactFormMessage {
    constructor(reason, first_name, last_name, email, phone_number, preferred_contact_method, message) {
        if(this.validateReason(reason)) this.reason = reason;
        if(this.validateFirstName(first_name)) this.first_name = first_name;
        if(this.validateLastName(last_name)) this.last_name = last_name;
        if(this.validateEmail(email)) this.email = email;
        if(this.validatePhoneNumber(phone_number)) this.phone_number = phone_number;
        if(this.validatePreferredContactMethod(preferred_contact_method)) this.preferred_contact_method = preferred_contact_method;
        if(this.validateMessage(message)) this.message = message;

        this.keys = Object.keys(this);
    }

    // Reason must be a string and it cannot be empty.
    validateReason(reason) {
        if(!(typeof reason === 'string' && reason.length !== 0)) 
            throw new EntityError('Reason needs to be of type string and it cannot be empty or undefined.');

        return true;
    }

    // First name must be a string and it cannot be empty/undefined and must be less than 50 characters.
    validateFirstName(first_name) {
        if(!(typeof first_name === 'string' && first_name.length !== 0 && first_name.length <= 50)) 
            throw new EntityError('First Name needs to be of type string, it cannot be empty or undefined, and it must be less than 50 characters.');
        
        return true;
    }

    // Last name must be a string and it cannot be empty/undefined and must be less than 50 characters.
    validateLastName(last_name) {
        if(!(typeof last_name === 'string' && reason !== undefined && last_name.length !== 0 && last_name.length <= 50)) 
            throw new EntityError('Last Name needs to be of type string, it cannot be empty or undefined, and it must be less than 50 characters.');

        return true;
    }

    // Email must be a string, it cannot be empty/undefined, and it must be less that 100 characters.
    // An email must also pass email validation (which could in the future check validity of email).
    validateEmail(email) {
        if(!(typeof email === 'string' && email.length > 0 && email.length <= 100 && emailValidation(email))) 
            throw new EntityError('Email needs to be of type string, it cannot be empty or undefined, and it must be in proper email format.');

        return true;
    }
    
    // Phone number must be a string and it cannot be empty/undefined.
    // A phone number must also pass phone number validation making sure it is in the correct format.
    validatePhoneNumber(phone_number) {
        if(!(typeof phone_number === 'string' && phone_number.length != 0 && phoneNumberValidation(phone_number))) 
            throw new EntityError('Phone Number needs to be of type string, it cannot be empty or undefined, and it must be in proper phone number format.');

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