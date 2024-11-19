import { EntityError } from "../error-handling/EntityError.js";

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
    if(!(typeof last_name === 'string' && last_name !== undefined && last_name.length !== 0 && last_name.length <= 50)) 
        throw new EntityError('Last Name needs to be of type string, it cannot be empty or undefined, and it must be less than 50 characters.');

    return true;
}

// ID needs to be of type number and must be an integer type number.
export function idValidation(id) {
    if(!(typeof id === 'string' && id.length > 10)) 
        throw new EntityError('ID needs to be of type string and must be longer than 10 characters.');

    return true;
}

// Helper function to determine if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

export function dateValidation(dateString) {
    // Regular expression to check format MM/DD/YYYY or MM-DD-YYYY
    const regex = /^(0[1-9]|1[0-2])[-/](0[1-9]|[12][0-9]|3[01])[-/](\d{4})$/;
    
    // Check if the date matches the format
    if (!regex.test(dateString)) {
        throw new EntityError('Date needs to be in the format of MM/DD/YYYY or MM-DD-YYYY.');
    }
    
    // Extract month, day, and year from the date string
    const [_, month, day, year] = dateString.match(regex).map(Number);

    // Define the number of days in each month
    const daysInMonth = {
        1: [31, 'January'],  // January
        2: [isLeapYear(year) ? 29 : 28, 'February'], // February
        3: [31, 'March'],  // March
        4: [30, 'April'],  // April
        5: [31, 'May'],  // May
        6: [30, 'June'],  // June
        7: [31, 'July'],  // July
        8: [31, 'August'],  // August
        9: [30, 'September'],  // September
        10: [31, 'October'], // October
        11: [30, 'November'], // November
        12: [31, 'December']  // December
    };
    // Check if the day is valid for the given month and year
    if(day <= daysInMonth[month][0]) return true;
    else throw new EntityError(`${daysInMonth[month][1]} only has ${daysInMonth[month][0]} days. Entered value: ${day}`);
}

export function creationDateValidation(ISOdateString) {
    // Regular expression to check format {YYYY/MM/DD}T{Hours}:{Minutes}:{Seconds}:{Milliseconds}Z
    const regex = /^(\d{4})-(\d{2})-(\d{2})T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/;
    
    // Check if the date matches the format
    if (!regex.test(ISOdateString)) {
        throw new EntityError('Date needs to be in the format of MM/DD/YYYY or MM-DD-YYYY.');
    }
    
    // Extract month, day, and year from the date string
    const [_, year, month, day] = ISOdateString.match(regex).map(Number);

    // Define the number of days in each month
    const daysInMonth = {
        1: [31, 'January'],  // January
        2: [isLeapYear(year) ? 29 : 28, 'February'], // February
        3: [31, 'March'],  // March
        4: [30, 'April'],  // April
        5: [31, 'May'],  // May
        6: [30, 'June'],  // June
        7: [31, 'July'],  // July
        8: [31, 'August'],  // August
        9: [30, 'September'],  // September
        10: [31, 'October'], // October
        11: [30, 'November'], // November
        12: [31, 'December']  // December
    };
    // Check if the day is valid for the given month and year
    if(day <= daysInMonth[month][0]) return true;
    else throw new EntityError(`${daysInMonth[month][1]} only has ${daysInMonth[month][0]} days. Entered value: ${day}`);
}

export function timeValidation(timeString) {
    // Time needs to be of string type and it cannot be empty or undefined.
    if(!(typeof timeString === 'string' && timeString.length !== 0))
        throw new EntityError('Time needs to be of string type and it cannot be empty or undefined.');

    // Regular expression to validate time formats that meet the following criteria:
    // 12-hour format with AM/PM (e.g., 02:30 AM, 11:59 PM)
    // 24-hour format without AM/PM (e.g., 14:30, 23:59)
    const regex = /^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$|^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    
    if(!regex.text(timeString)) throw new EntityError('Time needs be in a 12-hour time format or a 24-hour time format.');

    return true;
}

export function addressValidation(addressString) {
    if(!(typeof addressString === 'string' && addressString !== 0 && addressString.length <= 150))
        throw new EntityError('Address needs to be of string type, it cannot be empty or undefined, and it must be less than or equal to 150 characters.')
    
    return true;
}

export function contentValidation(content, name = null, minLength = 1, maxLength = 500) {
    if(!(name && typeof name == 'string' && name.length !== 0))
        throw new EntityError('Content name needs to be of type string and it cannot be empty or undefined.')
        
    if(!(typeof content === 'string' && content.length >= minLength && content.length <= maxLength))
        throw new EntityError(`Content[${name}] needs to be of type string and it cannot be empty and must be ${minLength} to ${maxLength} characters.`);

    return true;
}

// This function takes in an array of radioValues and tests them to the 
export function radioValidation(radioValueArr, section = null, trueValue = 'yes', falseValue = 'no') {
    if(!(Array.isArray(radioValueArr)))
        throw new EntityError(`Radio Value Arr in ${section} must an Array.`)

    radioValueArr.forEach(value => {
        if(!(typeof value === 'string' && (value === trueValue || value === falseValue)))
            throw new EntityError(`Radio[${section}] values need to be of type string and can only be ${trueValue} or ${falseValue}.`);
    });
    
    return true;
}

// A file needs to be an instance of File entity and if placed in arguments, the fileType must be what is accepted and nothing else.
export function fileValidation(file, acceptedFileType = null) {
    if(Array.isArray(file))
        throw new EntityError('File cannot be an array.'); // Maybe in the future checking an array can be placed but individual checking makes more sense.
    
    if(!(file instanceof File))
        throw new EntityError('File needs to be of type File.'); // File has to be an instance of entity File

    if(acceptedFileType) 
        if(!(acceptedFileType.every(type => type === file.fileExtension)))
            throw new EntityError(`The file cannot be of file extension ${file.fileExtension}.`);

    return acceptedFileType;
}