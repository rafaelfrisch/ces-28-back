import express from 'express';
import * as controllers from '../controllers/index'
import * as middlewares from '../middlewares';

const router = new express.Router()

router.post('/createorder/:userid', middlewares.authMiddleware, controllers.createOrder);
router.get('/filterordersbydate', middlewares.authMiddleware, controllers.filterOrdersByDate);
router.get('/getorderreportbydate', middlewares.authMiddleware, controllers.getOrderReportByDate);

module.exports = router
