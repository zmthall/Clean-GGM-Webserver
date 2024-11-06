import { EntityError } from "../../utility/error-handling/EntityError";
import { phoneNumberValidation } from "../../utility/validation/entityValidation";

export class Lead {
    constructor(first_name, last_name, email = null, phone_number) {
        if(this.validateFirstName(first_name)) this.first_name = first_name;
        if(this.validateLastName(last_name)) this.last_name = last_name;
        if(this.validateEmail(email)) this.email = email;
        if(this.validatePhoneNumber(phone_number)) this.phone_number = phone_number;
    }

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

    validateEmail(email) {
        if(!(typeof email === 'string' && email.length > 0 && email.length <= 100 && emailValidation(email))) 
            throw new EntityError('Email needs to be of type string, it cannot be empty or undefined, and it must be in proper email format.');

        if(email === null) return false;
        else return true;
    }
    
    // Phone number must be a string and it cannot be empty/undefined.
    // A phone number must also pass phone number validation making sure it is in the correct format.
    validatePhoneNumber(phone_number) {
        if(!(typeof phone_number === 'string' && phone_number.length != 0 && phoneNumberValidation(phone_number))) 
            throw new EntityError('Phone Number needs to be of type string, it cannot be empty or undefined, and it must be in proper phone number format.');

        return true;
    }
}