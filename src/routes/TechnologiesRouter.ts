import { Router } from 'express';
import { getTechnologies, createOneTechnolgy } from '../controllers/TechnologiesController';

const router = Router();

router.get('/', getTechnologies);
router.post('/', createOneTechnolgy);

export default router;
