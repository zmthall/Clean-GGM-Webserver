import { Email } from "../../entity/contact/email.js";
import { UseCaseError } from "../../utility/error-handling/useCaseError.js";

export function makeSendMessage(messageService) {
    return async function sendMessage(messageData) {
        try {
            const email = new Email(messageData);
            if(email)
                return messageService.sendEmail(email);
            else throw new UseCaseError({ message: 'Failed to place message data into an email.' });
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to send message.`,
                error
            });
        }
    }
}