import { Router } from 'express';
import TechnologiesRouter from './TechnologiesRouter';

const router = Router();

router.use('/technologies', TechnologiesRouter);

export default router;
