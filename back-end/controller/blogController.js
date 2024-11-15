import { controllerResponseHandler } from "../utility/response-handling/controllerResponseHandler.js";

export function makeBlogController({ createPost, getAllPosts, getPost, updatePost, deletePost, archivePost, getAllArchivePosts, getArchivePost, deleteArchivePost }) {
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
        }, req, res),
        archivePost: async (req, res) => controllerResponseHandler(async (req) => {
            return await archivePost(req.params);
        }, req, res),
        getAllArchivePosts: async (req, res) => controllerResponseHandler(async (req) => {
            return await getAllArchivePosts();
        }, req, res),
        getArchivePost: async (req, res) => controllerResponseHandler(async (req) => {
            return await getArchivePost(req.params);
        }, req, res),
        deleteArchivePost: async(req, res) => controllerResponseHandler(async (req) => {
            return await deleteArchivePost(req.params);
        }, req, res)
    }
}