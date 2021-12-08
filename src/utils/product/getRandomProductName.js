import { products } from './products.js'

const getRandomProductName = () => {
    const randomIndex = Math.floor(Math.random()*products.length)
    return products[randomIndex].name
}

module.exports = getRandomProductName
