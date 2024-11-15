import { UseCaseError } from "../../utility/error-handling/useCaseError.js";
import { Event, Location } from "../../entity/event/event.js";
import { nanoid } from "nanoid";

export function makeCreateEvent(repository) {
    return async function createEvent(newEventData) {
        newEventData ={
            ...newEventData,
            location: new Location(newEventData.location),
            url: new URL(newEventData.url),
            id: nanoid()
        }; // Insert new nanoid() id into newEventData

        try {
            const newEvent = await repository.create(new Event(newEventData));
            return newEvent;
        } catch (error) {
            console.error(error.message);
            throw new UseCaseError({
                message: `Failed to create event: [${ newEventData.id }]`,
                error
            });
        }
    }
}