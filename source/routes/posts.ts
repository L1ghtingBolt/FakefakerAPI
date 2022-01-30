/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/faker';
const router = express.Router();

router.get('/faker', controller.getUser);

export = router;