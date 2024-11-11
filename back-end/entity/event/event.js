import { EntityError } from "../../utility/error-handling/EntityError.js";
import { addressValidation, contentValidation, dateValidation } from "../../utility/validation/entityValidation";


function validateName(name) {
    if(!(typeof name === 'string' && name.length !== 0))
        throw new EntityError('Name needs to be of type string and cannot be empty or undefined.');

    return true;
}

class Location {
    constructor(name, address) {
        if(validateName(name)) this.name = name;
        if(addressValidation(address)) this.addres = address;
    }
}

export class Event {
    constructor(name, location, date, description, url) {
        if(validateName(name)) this.name = name;
        if(this.validateLocation(location)) this.location = location;
        if(dateValidation(date)) this.date = date;
        if(contentValidation(description, 'Event Description', 1, 250)) this.description = description;
        if(this.validateURL(url)) this.url = url;
    }

    validateLocation(location) {
        if(!(location instanceof Location)) 
            throw new EntityError('Location must be an instance of the Location class entity.');

        return true;
    }

    validateURL(url) {
        if(!(url instanceof URL))
            throw new EntityError('Url needs to be an instance of the URL class.');

        return true;
    }

}