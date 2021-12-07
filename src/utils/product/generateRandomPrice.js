const maxMultiplier = 2

const generateRandomPrice = (cost) => {
    const randomPrice = (cost*(1 + Math.random()*(maxMultiplier-1))).toFixed(2)
    return randomPrice
}

module.exports = generateRandomPrice
