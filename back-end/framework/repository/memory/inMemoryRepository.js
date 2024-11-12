import { BlogPost } from "../../../entity/blog/blogPost.js";
import { repositoryResponseHandler } from "../../../utility/response-handling/repositoryResponseHandler.js";

const repo = [];

export const memoryRepo = {
    create: async (newData) => repositoryResponseHandler(async () => {
        const newPost = repo[repo.push(new BlogPost(newData))];
        return newPost;
    }),
    get: async () => {

    },
    getAll: async () => {

    },
    update: async () => {

    },
    delete: async () => {

    }
};