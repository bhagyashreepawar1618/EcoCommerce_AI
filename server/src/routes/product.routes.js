import { Router } from 'express';
import {
  generateTags,
  generateImpact,
} from '../controllers/product.controller.js';

const router = Router();

router.route('/generate-tags').post(generateTags);
router.route('/generate-impact').post(generateImpact);

export default router;
