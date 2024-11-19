import { controllerResponseHandler } from "../utility/response-handling/controllerResponseHandler.js";

export function makeContactController({ createLead, getAllLeads, sendMessage, submitApplication, submitRideRequest }) {
    return {
        createLead: async (req, res) => controllerResponseHandler(async (req) => {
            return await createLead(req.body);
        }, req, res),
        getAllLeads: async (req, res) => controllerResponseHandler(async (req) => {
            return await getAllLeads();
        }, req, res)
    }
}