const productsData = require('./products.json')

const getRandomProductName = () => {
    const randomIndex = Math.floor(Math.random()*productsData.length)
    return productsData[randomIndex].name
}

module.exports = getRandomProductName
