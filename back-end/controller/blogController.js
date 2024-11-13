import { controllerResponseHandler } from "../utility/response-handling/controllerResponseHandler.js";

export function makeBlogController({ createPost }) {
    return {
        createPost: async (req, res) => controllerResponseHandler(async (req) => {
                return await createPost(req.body);
        }, req, res)
    }
}