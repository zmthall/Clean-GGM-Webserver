import { BlogPost } from "../../../entity/blog/blogPost.js";
import { RepositoryError } from "../../../utility/error-handling/frameworkError.js";
import { repositoryResponseHandler } from "../../../utility/response-handling/repositoryResponseHandler.js";

const repo = [];

export const memoryRepo = {
    create: async (newData) => repositoryResponseHandler(async () => {
        const newIDX = repo.push(new BlogPost(newData)) - 1
        return repo[newIDX];
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