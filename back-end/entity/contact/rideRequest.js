import { EntityError } from "../../utility/error-handling/EntityError";
import { idValidation, firstNameValidation, lastNameValidation, dateValidation, phoneNumberValidation, emailValidation, timeValidation, addressValidation } from "../../utility/validation/entityValidation";


class PassengerInformation {
    constructor(id, first_name, last_name, date_of_birth, phone_number, email, medicaid_id, creation_date) {
        if(idValidation(id)) this.id = id;
        if(firstNameValidation(first_name)) this.first_name = first_name;
        if(lastNameValidation(last_name)) this.last_name = last_name;
        if(dateValidation(date_of_birth)) this.date_of_birth = date_of_birth;
        if(phoneNumberValidation(phone_number)) this.phone_number = phone_number;
        if(emailValidation(email)) this.email = email;
        if(this.validateMedicaidID(medicaid_id)) this.medicaid_id = medicaid_id; 

        Object.freeze(this);
    }

    // Medicaid ID must be of type string and it cannot be empty/undefined.
    validateMedicaidID(medicaid_id) {
        if(!(typeof medicaid_id === 'string' && medicaid_id.length >= 0))
            throw new EntityError('Medicaid ID must be of type string and it cannot be empty/undefined.');

        return true;
    }
}

class AppointmentInformation {
    constructor(id, appointment_date, appointment_time, pickup_address, dropoff_address, notes) {
        if(idValidation(id)) this.id = id;
        if(dateValidation(appointment_date)) this.appointment_date = appointment_date;
        if(timeValidation(appointment_time)) this.appointment_time = appointment_time;
        if(addressValidation(pickup_address)) this.pickup_address = pickup_address;
        if(addressValidation(dropoff_address)) this.dropoff_address = dropoff_address;
        if(this.validateNotes(notes)) this.notes = notes;

        Object.freeze(this);
    }

    // Notes need to be of type string and they need to be between 0 and 1000 characters.
    validateNotes(notes) {
        if(!(typeof notes === 'string' && notes.length >= 0 && notes.length <= 1000))
            throw new EntityError('Notes need to be of type string and they need to be from 0 to 1000 characters.');

        return true;
    }
}

export class RideRequest {
    constructor(id, passengerInformation, appointmentInformation) {
        if(idValidation(id)) this.id = id;
        if(this.validatePassengerInformation(passengerInformation)) this.passengerInformation = passengerInformation;
        if(this.validateAppointmentInformation(appointmentInformation)) this.appointmentInformation = appointmentInformation;

        Object.freeze(this);
    }

    validatePassengerInformation(passengerInformation) {
        if(!(passengerInformation instanceof PassengerInformation))
            throw new EntityError('Passenger information must be an instance of PassengerInformation Entity.');

        return true;
    }

    validateAppointmentInformation(appointmentInformation) {
        if(!(appointmentInformation instanceof AppointmentInformation))
            throw new EntityError('Appointment information must be an instance of PassengerInformation Entity.');

        return true;
    }
}