import express from 'express';
import * as controllers from '../controllers/index'
import * as middlewares from '../middlewares';

const router = new express.Router()

router.get('/getallproducts', middlewares.authMiddleware, controllers.getAllProducts);
router.post('/createproduct/:categoryid', middlewares.authMiddleware, controllers.createProduct);

module.exports = router
