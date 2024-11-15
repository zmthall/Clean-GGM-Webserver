import express from 'express';

// Infrastructure layer imports
import { memoryRepo } from '../../repository/memory/inMemoryRepository.js';

// Application layer improts
import makeUseCases from '../../../use-case/blog/blogUseCases.js';

const useCases = {
    createPost: makeUseCases.makeCreatePost(memoryRepo),
    getAllPosts: makeUseCases.makeGetAllPosts(memoryRepo),
    getPost: makeUseCases.makeGetPost(memoryRepo),
    updatePost: makeUseCases.makeUpdatePost(memoryRepo),
    deletePost: makeUseCases.makeDeletePost(memoryRepo),
    archivePost: makeUseCases.makeArchivePost(memoryRepo),
    getAllArchivePosts: makeUseCases.makeGetAllArchivePosts(memoryRepo),
    getArchivePost: makeUseCases.makeGetArchivePost(memoryRepo),
    deleteArchivePost: makeUseCases.makeDeleteArchivePost(memoryRepo)
};

// Presentation layer
import { makeBlogController } from '../../../controller/blogController.js';

const blogController = makeBlogController(useCases);

const router = express.Router();

// middleware imports
import { errorHandler } from '../../middleware/error/errorHandling.js';

router.post('/post', blogController.createPost);
router.get('/post', blogController.getAllPosts);
router.get('/post/:id', blogController.getPost);
router.put('/post/:id', blogController.updatePost);
router.delete('/post/:id', blogController.deletePost);
router.post('/archive/:id', blogController.archivePost);
router.get('/archive', blogController.getAllArchivePosts);
router.get('/archive/:id', blogController.getArchivePost);
router.delete('/archive/:id', blogController.deleteArchivePost)

router.use(errorHandler);

export default router;