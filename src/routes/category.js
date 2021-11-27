import express from 'express';
import * as controllers from '../controllers/index'
import * as middlewares from '../middlewares';

const router = new express.Router()

router.get('/getallcategories', middlewares.authMiddleware, controllers.getAllCategories);
router.get('/getallproductsincategory/:categoryid', middlewares.authMiddleware, controllers.getAllProductsInCategory);
router.post('/createcategory', middlewares.authMiddleware, controllers.createCategory);

module.exports = router
