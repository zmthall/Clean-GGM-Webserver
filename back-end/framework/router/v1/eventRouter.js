import express from 'express';

// Infrastructure layer imports
import { memoryRepo } from '../../repository/memory/inMemoryRepository.js';

// Application layer improts
import makeUseCases from '../../../use-case/event/eventUseCases.js';

const useCases = {
    createEvent: makeUseCases.makeCreateEvent(memoryRepo),
    getAllEvents: makeUseCases.makeGetAllEvents(memoryRepo),
    getEvent: makeUseCases.makeGetEvent(memoryRepo),
    updateEvent: makeUseCases.makeUpdateEvent(memoryRepo),
    deleteEvent: makeUseCases.makeDeleteEvent(memoryRepo),
    archiveEvent: makeUseCases.makeArchiveEvent(memoryRepo)
}

// presentation layer imports
import { makeEventController } from '../../../controller/eventController.js';

const eventController = makeEventController(useCases);

const router = express.Router();

router.post('/post', eventController.createEvent);
router.get('/post', eventController.getAllEvents);
router.get('/post/:id', eventController.getEvent);
router.put('/post/:id', eventController.updateEvent);
router.delete('/post/:id', eventController.deleteEvent);
router.post('/archive/:id', eventController.archiveEvent);

export default router;