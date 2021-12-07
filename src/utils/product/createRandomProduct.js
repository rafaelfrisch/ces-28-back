import * as models from '../../models'
const getRandomProductName = require('./getRandomProductName')

const createRandomProduct = async () => {
    const randomName = getRandomProductName()
    console.log(randomName)
}

module.exports = createRandomProduct
