import { Router } from 'express';
import {
  generateTags,
  generateImpact,
} from '../controllers/product.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = Router();

router.route('/generate-tags').post(verifyJWT, generateTags);
router.route('/generate-impact').post(verifyJWT, generateImpact);

export default router;
