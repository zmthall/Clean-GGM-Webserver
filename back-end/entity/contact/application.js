import { EntityError } from "../../utility/error-handling/EntityError";
import { addressValidation, contentValidation, dateValidation, fileValidation, firstNameValidation, lastNameValidation, phoneNumberValidation, radioValidation } from "../../utility/validation/entityValidation";

class PersonalInformation {
    constructor(first_name, last_name, address, phone_number, age_18, us_citizen, been_charged_felony, creation_date) {
        if(firstNameValidation(first_name)) this.first_name = first_name;
        if(lastNameValidation(last_name)) this.last_name = last_name;
        if(addressValidation(address)) this.address = this.address;
        if(phoneNumberValidation(phone_number)) this.phone_number = phone_number;
        if(radioValidation([age_18, us_citizen, been_charged_felony])) {
            this.age_18 = age_18;
            this.us_citizen = us_citizen;
            this.been_charged_felony = been_charged_felony;
        }

        Object.freeze(this);
    }
}

class DriverInformation {
    constructor(has_endorsements, endorsements, has_accident_history, accident_history, has_traffic_conviction_history, traffic_conviction_history, has_mvr, mvr, drivers_license) {
        if(radioValidation([has_endorsements, has_accident_history, has_traffic_conviction_history, has_mvr], 'Driver Information')) {
            this.has_endorsements = has_endorsements;
            this.has_accident_history = has_accident_history;
            this.has_traffic_conviction_history = has_traffic_conviction_history;
            this.has_mvr = has_mvr;
        }
        if(contentValidation(endorsements, Object.keys({endorsements})[0])) this.endorsements = endorsements;
        if(contentValidation(accident_history, Object.keys({accident_history})[0])) this.accident_history = accident_history;
        if(contentValidation(traffic_conviction_history, Object.keys({traffic_conviction_history})[0])) this.traffic_conviction_history = traffic_conviction_history;

        if(fileValidation(mvr, ['pdf'])) this.mvr = mvr;
        if(fileValidation(drivers_license, ['jpg', 'jpeg', 'png', 'pdf'])) this.drivers_license = drivers_license;

        Object.freeze(this);
    }
}

class WorkInformation {
    constructor(heard_about_from, worked_with_company_before, employment_type, availability, is_willing_to_work_overtime, preferred_pay_rate, available_start_date, resume) {
        if(this.validateHeardAboutFrom(heard_about_from)) this.heard_about_from = heard_about_from;
        if(radioValidation([worked_with_company_before, is_willing_to_work_overtime], 'Work Information')) {
            this.worked_with_company_before = worked_with_company_before;
            this.is_willing_to_work_overtime = is_willing_to_work_overtime;
        } 
        if(radioValidation(employment_type, 'Work Information', 'Full-Time', 'Part-Time'));
        if(contentValidation(availability, Object.keys({availability})[0])) this.availability = availability;
        if(this.validatePreferredPayRate(preferred_pay_rate)) this.preferred_pay_rate = preferred_pay_rate;
        if(dateValidation(available_start_date)) this.available_start_date = available_start_date;
        if(fileValidation(resume)) this.resume = resume;

        Object.freeze(this);
    }

    validateHeardAboutFrom(heard_about_from) {
        if(!(typeof heard_about_from === 'string' && heard_about_from.length > 0))
            throw new EntityError('Heard about from needs to be of type string and it cannot be empty or undefined.');

        return true;
    }

    validatePreferredPayRate(preferred_pay_rate) {
        if(!(typeof preferred_pay_rate === 'string' && preferred_pay_rate.length > 0))
            throw new EntityError('Preferred pay rate needs to be of type string and it cannot be empty or undefined.');

        return true;
    }
}

export class Application {
    constructor(position, personalInformation, driverInformation = null, workInformation) {
        if(this.validatePosition(position)) this.position = position;
        if(this.validatePersonalInformation(personalInformation)) this.personalInformation = personalInformation;
        if(driverInformation && this.validateDriverInformation(driverInformation)) this.driverInformation = driverInformation;
        if(this.validateWorkInformation(workInformation)) this.workInformation = workInformation;

        Object.freeze(this);
    }

    validatePosition(position) {
        if(!(typeof position === 'string' && position.length !== 0))
            throw new EntityError('Position must needs to be of type string and it cannot be empty or undefined.');

        return true;
    }

    validatePersonalInformation(personalInformation) {
        if(!(personalInformation instanceof PersonalInformation))
            throw new EntityError('Personal information must be an instance of PersonalInformation Entity.');

        return true;
    }

    validateDriverInformation(driverInformation) {
        if(!(driverInformation instanceof DriverInformation))
            throw new EntityError('Driver information must be an instance of DriverInformation Entity.');

        return true;
    }

    validateWorkInformation(workInformation) {
        if(!(workInformation instanceof WorkInformation))
            throw new EntityError('Work information must be an instance of WorkInformation Entity.');

        return true;
    }
}