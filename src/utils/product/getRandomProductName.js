import * as products from './products.json'

const getRandomProductName = () => {
    const productsData = products.default
    const randomIndex = Math.floor(Math.random()*productsData.length)
    return productsData[randomIndex].name
}

module.exports = getRandomProductName
