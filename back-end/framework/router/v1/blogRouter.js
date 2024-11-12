import express from 'express';

// Infrastructure layer imports
import { memoryRepo } from '../../repository/memory/inMemoryRepository';

// Application layer improts
import makeUseCases from '../../../use-case/blog/blogUseCases.js'

const useCases = {
    createPost: makeUseCases.makeCreatePost({ memoryRepo })
}

// Presentation layer
import { makeBlogController } from '../../../controller/blogController';

const blogController = makeBlogController(useCases);

const router = express.Router();

// middleware imports

router.post('/', blogController.createPost);

export default router;