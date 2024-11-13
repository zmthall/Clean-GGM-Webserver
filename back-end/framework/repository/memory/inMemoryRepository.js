import { BlogPost } from "../../../entity/blog/blogPost.js";
import { RepositoryError } from "../../../utility/error-handling/frameworkError.js";
import { repositoryResponseHandler } from "../../../utility/response-handling/repositoryResponseHandler.js";

const repo = [];

export const memoryRepo = {
    create: async (newData) => repositoryResponseHandler(async () => {
        const newIDX = repo.push(new BlogPost(newData)) - 1
        return repo[newIDX];
    }),
    get: async (id) => repositoryResponseHandler(async () => {
        const post = repo.find(post => id === post.id);
        if(post) return post;
        else throw new RepositoryError({ message: 'The Repository is empty.' });

    }),
    getAll: async () => repositoryResponseHandler(async () => {
        console.log(repo.length)
        if(repo.length > 0) return repo;
        else throw new RepositoryError({ message: 'The Repository is empty.' });
    }),
    update: async () => {

    },
    delete: async () => {

    }
};