import { RepositoryError } from "../../../utility/error-handling/frameworkError.js";
import { repositoryResponseHandler } from "../../../utility/response-handling/repositoryResponseHandler.js";

const repo = [];
const archive = [];

const memoryStorage = {
    blog: [],
    lead: [],
    event: [],
    blog_archive: [],
    lead_archive: [],
    event_archive: []
}

// Utilizing factory function to create the memory Repo with the correct memory storage usage.
export const makeInMemoryRepo = (context) => {
    if(!memoryStorage[context])
        throw new RepositoryError({ message: `Cannot get MemoryRepo as context provided is invalid: ${context}` });

    const repo = memoryStorage[context];
    const archive_repo = memoryStorage[context + '_archive'];

    return {
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
            const postIDX = repo.findIndex(post => post.id === id);
            if(postIDX === -1) throw new RepositoryError({ message: `There is no post with id: ${id}`});

            const editedPost = repo[postIDX].edit(editData);
        
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
            const archiveIDX = archive_repo.push(archiveData) - 1;
            return archive_repo[archiveIDX];
        }),
        getAll_archive: async () => repositoryResponseHandler(async () => {
            if(archive_repo.length > 0) return archive_repo;
            else throw new RepositoryError({ message: 'The Repository is empty.' });
        }),
        get_archive: async (id) => repositoryResponseHandler(async () => {
            const archivePost = archive_repo.find(post => id === post.id);
            if(archivePost) return archivePost;
            else throw new RepositoryError({ message: `The Repository post with id: ${id} could not be found.` });
        }),
        delete_archive: async (id) => repositoryResponseHandler(async () => {
            const archive_postIDX = archive_repo.findIndex(post => post.id === id);
            if(!(archive_postIDX >= 0))
                throw new RepositoryError({ message: `The Repository post with id: ${id} could not be found.`});
            
            const deletedArchivePost = archive_repo.splice(archive_postIDX, 1);
            return deletedArchivePost[0];
        })
    }
}

// export const memoryRepo = {
//     create: async (newData) => repositoryResponseHandler(async () => {
//         const newIDX = repo.push(newData) - 1;
//         return repo[newIDX];
//     }),
//     getAll: async () => repositoryResponseHandler(async () => {
//         if(repo.length > 0) return repo;
//         else throw new RepositoryError({ message: 'The Repository is empty.' });
//     }),
//     get: async (id) => repositoryResponseHandler(async () => {
//         const post = repo.find(post => id === post.id);
//         if(post) return post;
//         else throw new RepositoryError({ message: `The Repository post with id: ${id} could not be found.` });
//     }),
//     update: async (id , editData) => repositoryResponseHandler(async () => {
//         const editedPost = repo.map(post => {
//             if(post.id === id)
//                 return post.edit(editData);
//             else throw new RepositoryError({ message: `The Repository post with id: ${id} could not be updated.` });
//         })[0];

//         if(!(editedPost))
//             throw new RepositoryError({ message: `Failed to edit post with id: ${id}` })

//         const postIDX = repo.findIndex(post => post.id === id);
//         repo[postIDX] = editedPost;

//         return editedPost;
//     }),
//     delete: async (id) => repositoryResponseHandler(async () => {
//         const postIDX = repo.findIndex(post => post.id === id);
//         if(!(postIDX >= 0))
//             throw new RepositoryError({ message: `The Repository post with id: ${id} could not be found.`});

//         const deletedPost = repo.splice(postIDX, 1);
//         return deletedPost[0];
//     }),
//     archive: async (archiveData) => repositoryResponseHandler(async () => {
//         const archiveIDX = archive.push(archiveData) - 1;
//         return archive[archiveIDX];
//     }),
//     getAll_archive: async () => repositoryResponseHandler(async () => {
//         if(archive.length > 0) return archive;
//         else throw new RepositoryError({ message: 'The Repository is empty.' });
//     }),
//     get_archive: async (id) => repositoryResponseHandler(async () => {
//         const archivePost = archive.find(post => id === post.id);
//         if(archivePost) return archivePost;
//         else throw new RepositoryError({ message: `The Repository post with id: ${id} could not be found.` });
//     }),
//     delete_archive: async (id) => repositoryResponseHandler(async () => {
//         const archive_postIDX = archive.findIndex(post => post.id === id);
//         if(!(archive_postIDX >= 0))
//             throw new RepositoryError({ message: `The Repository post with id: ${id} could not be found.`});
        
//         const deletedArchivePost = archive.splice(archive_postIDX, 1);
//         return deletedArchivePost[0];
//     })
// };