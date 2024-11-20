import express from 'express';

// Infrastructure layer imports
import { makeInMemoryRepo } from '../../repository/memory/inMemoryRepository.js';
import { messageService } from '../../service/contact/messageService.js';

const memoryRepo = makeInMemoryRepo('lead');

// Application layer improts
import makeUseCases from '../../../use-case/contact/contactUseCases.js';

const useCases = {
    createLead: makeUseCases.makeCreateLead(memoryRepo), 
    getAllLeads: makeUseCases.makeGetAllLeads(memoryRepo), 
    sendMessage: makeUseCases.makeSendMessage(messageService)
    // submitApplication, 
    // submitRideRequest
};

// Presentation layer
import { makeContactController } from '../../../controller/contactController.js';

const contactController = makeContactController(useCases);

// middleware imports
import { errorHandler } from '../../middleware/error/errorHandling.js';

// microservice routing
const router = express.Router();

router.post('/lead', contactController.createLead);
router.get('/lead', contactController.getAllLeads);
router.post('/message', contactController.sendMessage);

// middleware usage ocurring at the end of routing
router.use(errorHandler); 

export default router;