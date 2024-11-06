import { EntityError } from "../error-handling/EntityError";

// Email must be a string, it cannot be empty/undefined, and it must be less that 100 characters.
// An email must also pass the regex expression making sure it is in proper email format.
// This could in the future check validity of email.
export function emailValidation(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!(typeof email === 'string' && email.length > 0 && email.length <= 100 && regex.test(email))) 
        throw new EntityError('Email needs to be of type string, it cannot be empty or undefined, and it must be in proper email format.');

    if(email === null) return false;
    else return true;
}

// Phone number must be a string and it cannot be empty/undefined.
// A phone number must also pass the regex expression making sure it is in proper phone number format.
export function phoneNumberValidation(phone_number) {
    const regex = /^(\(\d{3}\)|\d{3})[ .-]?\d{3}[ .-]?\d{4}$/;

    if(!(typeof phone_number === 'string' && phone_number.length != 0 && regex.test(phone_number))) 
        throw new EntityError('Phone Number needs to be of type string, it cannot be empty or undefined, and it must be in proper phone number format.');

    return true;
}

// First name must be a string and it cannot be empty/undefined and must be less than 50 characters.
export function firstNameValidation(first_name) {
    if(!(typeof first_name === 'string' && first_name.length !== 0 && first_name.length <= 50)) 
        throw new EntityError('First Name needs to be of type string, it cannot be empty or undefined, and it must be less than 50 characters.');
    
    return true;
}

// Last name must be a string and it cannot be empty/undefined and must be less than 50 characters.
export function lastNameValidation(last_name) {
    if(!(typeof last_name === 'string' && reason !== undefined && last_name.length !== 0 && last_name.length <= 50)) 
        throw new EntityError('Last Name needs to be of type string, it cannot be empty or undefined, and it must be less than 50 characters.');

    return true;
}