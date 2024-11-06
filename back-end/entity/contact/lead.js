import { phoneNumberValidation } from "../../utility/validation/entityValidation.js";
import { firstNameValidation, lastNameValidation, emailValidation, phoneNumberValidation } from "../../utility/validation/entityValidation.js";
import { EntityError } from "../../utility/error-handling/EntityError.js";

export class Lead {
    constructor(first_name, last_name, email = null, phone_number = null) {
        if(firstNameValidation(first_name)) this.first_name = first_name;
        if(lastNameValidation(last_name)) this.last_name = last_name;
        if(emailValidation(email)) this.email = email;
        if(phoneNumberValidation(phone_number)) this.phone_number = phone_number;

        this.validateRequired(email, phone_number)
    }

    validateRequired(email, phone_number) {
        if(email === null && phone_number === null) throw new EntityError('A lead has to have either an email or a phone number. Both cannot be empty or undefinied.')
    }
}