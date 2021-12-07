import * as models from '../../models'
const getRandomProductName = require('./getRandomProductName')
const generateRandomCost = require('./generateRandomCost')
const generateRandomPrice = require('./generateRandomPrice')
const generateRandomStock = require('./generateRandomStock')

const createRandomProduct = async () => {
    const randomName = getRandomProductName()
    const randomCost = generateRandomCost()
    const randomPrice = generateRandomPrice(randomCost)
    const randomStock = generateRandomStock()
    console.log(randomName, randomCost, randomPrice, randomStock)
}

module.exports = createRandomProduct
