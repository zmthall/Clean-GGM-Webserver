import { errorResponse, successResponse } from "./responses.js";

export async function controllerResponseHandler(controllerFunc, req, res) {
    try {
        const result = await controllerFunc(req);
        res.status(result.status || 200).json(successResponse(result));
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json(errorResponse(error));
    }
}