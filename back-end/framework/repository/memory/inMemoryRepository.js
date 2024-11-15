import { RepositoryError } from "../../../utility/error-handling/frameworkError.js";
import { repositoryResponseHandler } from "../../../utility/response-handling/repositoryResponseHandler.js";

const repo = [];
const archive = [];

export const memoryRepo = {
    create: async (newData) => repositoryResponseHandler(async () => {
        const newIDX = repo.push(newData) - 1;
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
    update: async (id , editData) => repositoryResponseHandler(async () => {
        const editedPost = repo.map(post => {
            if(post.id === id)
                return post.edit(editData);
            else throw new RepositoryError({ message: `The Repository post with id: ${id} could not be updated.` });
        })[0];

        if(!(editedPost))
            throw new RepositoryError({ message: `Failed to edit post with id: ${id}` })

        const postIDX = repo.findIndex(post => post.id === id);
        repo[postIDX] = editedPost;

        return editedPost;
    }),
    delete: async (id) => repositoryResponseHandler(async () => {
        const postIDX = repo.findIndex(post => post.id === id);
        if(!(postIDX >= 0))
            throw new RepositoryError({ message: `The Repository post with id: ${id} could not be found.`});

        const deletedPost = repo.splice(postIDX, 1);
        return deletedPost[0];
    }),
    archive: async (archiveData) => repositoryResponseHandler(async () => {
        const archiveIDX = archive.push(archiveData) - 1;
        return archive[archiveIDX];
    })
};