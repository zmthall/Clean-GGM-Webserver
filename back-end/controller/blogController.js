import { controllerResponseHandler } from "../utility/response-handling/controllerResponseHandler.js";

export function makeBlogController({ createPost, getAllPosts }) {
    return {
        createPost: async (req, res) => controllerResponseHandler(async (req) => {
            return await createPost(req.body);
        }, req, res),
        getAllPosts: async (req, res) => controllerResponseHandler(async (req) => {
            return await getAllPosts();
        }, req, res)
    }
}