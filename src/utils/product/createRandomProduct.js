import * as models from '../../models'
const getRandomProductName = require('./getRandomProductName')
const generateRandomCost = require('./generateRandomCost')
const generateRandomPrice = require('./generateRandomPrice')
const generateRandomStock = require('./generateRandomStock')
const getRandomCategoryId = require('./getRandomCategoryId')

const createRandomProduct = async () => {
    const randomName = getRandomProductName()
    const randomCost = generateRandomCost()
    const randomPrice = generateRandomPrice(randomCost)
    const randomStock = generateRandomStock()
    const randomCategoryId = await getRandomCategoryId()

    console.log(randomName, randomCost, randomPrice, randomStock, randomCategoryId)
}

module.exports = createRandomProduct
