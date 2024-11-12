import { controllerResponseHandler } from "../utility/response-handling/controllerResponseHandler";


export function makeBlogController({ createPost }) {
    return {
        createPost: async (req, res) => controllerResponseHandler(async (req) => {
            return await createPost(req.body);
        })
    }
}