import express from 'express';
import * as controllers from '../controllers/index'
import * as middlewares from '../middlewares';

const router = new express.Router()

router.get('/getuser/:userid', middlewares.authMiddleware, controllers.getUser);
router.get('/getuserbytoken', middlewares.authMiddleware, controllers.getUserByToken);
router.get('/getallusers', middlewares.authMiddleware, middlewares.adminAuthMiddleware, controllers.getAllUsers);
router.post('/createuser', controllers.createUser);
router.put('/users/:userid', middlewares.authMiddleware, controllers.updateUser);
router.delete('/deleteuser/:userid', middlewares.authMiddleware, middlewares.adminAuthMiddleware, controllers.deleteUser);
router.post('/login', controllers.login);

module.exports = router
