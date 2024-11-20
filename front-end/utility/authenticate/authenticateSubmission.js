import { UtilityError } from "../../../back-end/utility/error-handling/utilityError.js";
import axios from "axios";
import 'dotenv/config';

export async function authenticateSubmission(responseToken) {
    if(responseToken) {
        const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_KEY}&response=${responseToken}`;
        try {
            const verifyResponse = await axios.get(verifyURL);
            return verifyResponse;
        } catch (error) {
            throw new UtilityError({ message: 'Failed to send responseToken for verifyResponse.', error });
        }
    } else throw new UtilityError({ message: 'The response token is missing.' });
}