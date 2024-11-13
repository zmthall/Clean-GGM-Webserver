import express from 'express';

// Infrastructure layer imports
import { memoryRepo } from '../../repository/memory/inMemoryRepository.js';

// Application layer improts
import makeUseCases from '../../../use-case/blog/blogUseCases.js'

const useCases = {
    createPost: makeUseCases.makeCreatePost(memoryRepo),
    getAllPosts: makeUseCases.makeGetAllPosts(memoryRepo)
}

// Presentation layer
import { makeBlogController } from '../../../controller/blogController.js';

const blogController = makeBlogController(useCases);

const router = express.Router();

// middleware imports
import { errorHandler } from '../../middleware/error/errorHandling.js';

router.post('/post', blogController.createPost);
router.get('/post', blogController.getAllPosts);

router.use(errorHandler);

export default router;