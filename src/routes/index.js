const userRouter = require('./users');
const productRouter = require('./products');
const categoryRouter = require('./category');

module.exports = function(app){
    app.use(userRouter)
    app.use(productRouter)
    app.use(categoryRouter)
}