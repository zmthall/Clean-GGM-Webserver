import { EntityError } from "../../utility/error-handling/EntityError.js";
import { idValidation, addressValidation, dateValidation, contentValidation, creationDateValidation } from "../../utility/validation/entityValidation.js";


function validateName(name) {
    if(!(typeof name === 'string' && name.length !== 0))
        throw new EntityError('Name needs to be of type string and cannot be empty or undefined.');

    return true;
}

export class Location {
    constructor({ name, address }) {
        if(validateName(name)) this.name = name;
        if(addressValidation(address)) this.address = address;
    }
}

export class Event {
    constructor({ id, name, location, date, description, url }) {
        if(idValidation(id)) this.id = id;
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

    validateEditData(editData) {
        if(!(Object.keys(editData).length > 0))
            throw new EntityError('There is no new data assign.');

        if(!(Object.keys(editData).every(key => key !== 'id')))
            throw new EntityError('To edit a Blog Post, your new post data cannot contain/change: id or creation_date.')

        return true;
    }

    edit(newEventData) {
        if(this.validateEditData(newEventData)) {
            newEventData.location = new Location({
                ...this.location,
                ...newEventData.location
            });

            const editedEvent = new Event({
                ...this,
                ...newEventData,
                id: this.id
            });

            return editedEvent;
        }
    }

}

export class ArchivedEvent extends Event {
    constructor({ id, name, location, date, description, url, archived_date = (new Date()).toISOString() }) {
        super({ id, name, location, date, description, url });
        if(creationDateValidation(archived_date)) this.archived_date = archived_date;
    }
}