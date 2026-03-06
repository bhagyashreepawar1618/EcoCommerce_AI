import { Router } from 'express';
import { generateTags } from '../controllers/product.controller.js';

const router = Router();

router.route('/generate-tags').post(generateTags);

export default router;
