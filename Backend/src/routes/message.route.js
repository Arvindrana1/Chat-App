import expres from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
const router = expres.Router();

router.get('/', protectRoute, getUserForSidebar);

export default router;
