const userRouter = require('./users');
const productRouter = require('./products');
const categoryRouter = require('./category');
const orderRouter = require('./orders');

module.exports = function(app){
    app.use(userRouter)
    app.use(productRouter)
    app.use(categoryRouter)
    app.use(orderRouter)
}