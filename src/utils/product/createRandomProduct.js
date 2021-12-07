import * as models from '../../models'
const getRandomProductName = require('./getRandomProductName')
const generateRandomCost = require('./generateRandomCost')
const generateRandomPrice = require('./generateRandomPrice')
const generateRandomStock = require('./generateRandomStock')
const getRandomCategoryId = require('./getRandomCategoryId')
const generateRandomSurName = require('./generateRandomSurName')

const createRandomProduct = async () => {
    const randomName = getRandomProductName()
    const randomCost = generateRandomCost()
    const randomPrice = generateRandomPrice(randomCost)
    const randomStock = generateRandomStock()
    const randomSurName = generateRandomSurName()
    const randomCategoryId = await getRandomCategoryId()

    const randomProduct = new models.Product(
        { 
            name: randomName + ' ' + randomSurName,
            cost: randomCost,
            priceToConsumer: randomPrice,
            stock: randomStock,
            category: randomCategoryId
        }
        )
    await randomProduct.save()
}

module.exports = createRandomProduct
