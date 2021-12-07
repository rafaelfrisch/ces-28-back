import * as models from '../../models'
const getRandomProductName = require('./getRandomProductName')
const createRandomCost = require('./createRandomCost')
const createRandomPrice = require('./createRandomPrice')

const createRandomProduct = async () => {
    const randomName = getRandomProductName()
    const randomCost = createRandomCost()
    const randomPrice = createRandomPrice(randomCost)
    console.log(randomName, randomCost, randomPrice)
}

module.exports = createRandomProduct
