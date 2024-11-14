import { BlogPost } from "../../../entity/blog/blogPost.js";
import { RepositoryError } from "../../../utility/error-handling/frameworkError.js";
import { repositoryResponseHandler } from "../../../utility/response-handling/repositoryResponseHandler.js";

const repo = [];

export const memoryRepo = {
    create: async (newData) => repositoryResponseHandler(async () => {
        const newIDX = repo.push(new BlogPost(newData)) - 1
        return repo[newIDX];
    }),
    getAll: async () => repositoryResponseHandler(async () => {
        if(repo.length > 0) return repo;
        else throw new RepositoryError({ message: 'The Repository is empty.' });
    }),
    get: async (id) => repositoryResponseHandler(async () => {
        const post = repo.find(post => id === post.id);
        if(post) return post;
        else throw new RepositoryError({ message: `The Repository post with id: ${id} could not be found.` });
    }),
    update: async (id , editData) => {
        const editedPost = repo.map(post => {
            if(post.id === id)
                return post.edit(editData)
            else throw new RepositoryError({ message: `The Repository post with id: ${id} could not be updated.` });
        });

        return editedPost;
    },
    delete: async (id) => {
        const deletedPost = repo[repo.findIndex(post => post.id === id)];
        if(!(deletedPost))
            throw new RepositoryError({ message: `The Repository post with id: ${id} coult not be deleted.`});

        return deletedPost;
    }
};