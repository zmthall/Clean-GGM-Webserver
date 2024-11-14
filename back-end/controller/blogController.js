import { controllerResponseHandler } from "../utility/response-handling/controllerResponseHandler.js";

export function makeBlogController({ createPost, getAllPosts, getPost, updatePost, deletePost }) {
    return {
        createPost: async (req, res) => controllerResponseHandler(async (req) => {
            return await createPost(req.body);
        }, req, res),
        getAllPosts: async (req, res) => controllerResponseHandler(async (req) => {
            return await getAllPosts();
        }, req, res),
        getPost: async (req, res) => controllerResponseHandler(async (req) => {
            return await getPost(req.params);
        }, req, res),
        updatePost: async (req, res) => controllerResponseHandler(async (req) => {
            return await updatePost(req.params, req.body);
        }, req, res),
        deletePost: async (req, res) => controllerResponseHandler(async (req) => {
            return await deletePost(req.params);
        }, req, res)
    }
}