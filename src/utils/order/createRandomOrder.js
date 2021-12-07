import * as models from '../../models'

const getRandomUserId = require('./getRandomUser');
const getRandomNumberOfProductsIds = require('./getRandomNumberOfProductsIds');
const addQuantityToProducts = require('./addQuantityToProducts');
const generateRandomDateOnInterval = require('./generateRandomDate');

const createRandomOrder = async (minDate, maxDate) => {
    const randomUserId = await getRandomUserId()
    const randomNumberOfProductsIds = await getRandomNumberOfProductsIds()

    const newProductsArray = addQuantityToProducts(randomNumberOfProductsIds)
    const randomDate = generateRandomDateOnInterval(minDate, maxDate)

    const newOrder = new models.Order({ user: randomUserId, products: newProductsArray, orderDate: randomDate })
    await newOrder.save()
}

module.exports = createRandomOrder
