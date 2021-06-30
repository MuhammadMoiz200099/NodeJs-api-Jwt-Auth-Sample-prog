import { Router } from 'express';

import authRouter from './auth';
import userRouter from './user';
import productRouter from './product-list';
import orderRouter from './order';

const router: Router = Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/order', orderRouter);

export default router;
