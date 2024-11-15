import { controllerResponseHandler } from "../utility/response-handling/controllerResponseHandler.js";

export function makeEventController({ createEvent, getAllEvents, getEvent, updateEvent, deleteEvent, archiveEvent }) {
    return {
        createEvent: async (req, res) => controllerResponseHandler(async (req) => {
            return await createEvent(req.body);
        }, req, res),
        getAllEvents: async (req, res) => controllerResponseHandler(async (req) => {
            return await getAllEvents();
        }, req, res),
        getEvent: async (req, res) => controllerResponseHandler(async (req) => {
            return await getEvent(req.params);
        }, req, res),
        updateEvent: async (req, res) => controllerResponseHandler(async (req) => {
            return await updateEvent(req.params, req.body)
        }, req, res),
        deleteEvent: async (req, res) => controllerResponseHandler(async (req) => {
            return await deleteEvent(req.params);
        }, req, res),
        archiveEvent: async (req, res) => controllerResponseHandler(async (req) => {
            return await archiveEvent(req.params);
        }, req, res)
    }
}