import express from 'express';

// Infrastructure layer imports
import { makeInMemoryRepo } from '../../repository/memory/inMemoryRepository.js';
// import { memoryRepo } from '../../repository/memory/inMemoryRepository.js';

const memoryRepo = makeInMemoryRepo('event');

// Application layer improts
import makeUseCases from '../../../use-case/event/eventUseCases.js';

const useCases = {
    createEvent: makeUseCases.makeCreateEvent(memoryRepo),
    getAllEvents: makeUseCases.makeGetAllEvents(memoryRepo),
    getEvent: makeUseCases.makeGetEvent(memoryRepo),
    updateEvent: makeUseCases.makeUpdateEvent(memoryRepo),
    deleteEvent: makeUseCases.makeDeleteEvent(memoryRepo),
    archiveEvent: makeUseCases.makeArchiveEvent(memoryRepo),
    getAllArchiveEvents: makeUseCases.makeGetAllArchiveEvents(memoryRepo),
    getArchiveEvent: makeUseCases.makeGetArchiveEvent(memoryRepo),
    deleteArchiveEvent: makeUseCases.makeDeleteArchiveEvent(memoryRepo)
}

// presentation layer imports
import { makeEventController } from '../../../controller/eventController.js';

const eventController = makeEventController(useCases);

// middleware imports
import { errorHandler } from '../../middleware/error/errorHandling.js';

// microservice routing
const router = express.Router();

router.post('/post', eventController.createEvent);
router.get('/post', eventController.getAllEvents);
router.get('/post/:id', eventController.getEvent);
router.put('/post/:id', eventController.updateEvent);
router.delete('/post/:id', eventController.deleteEvent);
router.post('/archive/:id', eventController.archiveEvent);
router.get('/archive', eventController.getAllArchiveEvents);
router.get('/archive/:id', eventController.getArchiveEvent);
router.delete('/archive/:id', eventController.deleteArchiveEvent);

router.use(errorHandler);

export default router;