import { controllerResponseHandler } from "../utility/response-handling/controllerResponseHandler.js";

export function makeEventController({ createEvent, getAllEvents, getEvent, updateEvent, deleteEvent, archiveEvent, getAllArchiveEvents, getArchiveEvent, deleteArchiveEvent }) {
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
        }, req, res),
        getAllArchiveEvents: async (req, res) => controllerResponseHandler(async (req) => {
            return await getAllArchiveEvents();
        }, req, res),
        getArchiveEvent: async (req, res) => controllerResponseHandler(async (req) => {
            return await getArchiveEvent(req.params);
        }, req, res),
        deleteArchiveEvent: async (req, res) => controllerResponseHandler(async (req) => {
            return await deleteArchiveEvent(req.params);
        }, req, res)
    }
}