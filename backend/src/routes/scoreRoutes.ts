import { Router } from 'express';
import { getScores, randomizeScores } from '../controllers/scoreController';
import { ensureAuth } from '../middlewares/authMiddleware';

const router = Router();

router.get('/',ensureAuth, getScores);
router.post('/randomize',ensureAuth, randomizeScores);

export default router;
