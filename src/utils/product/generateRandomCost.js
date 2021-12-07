const maxCost = 1000

const generateRandomCost = () => {
    const randomCost = (Math.random()*maxCost).toFixed(2)
    return randomCost
}

module.exports = generateRandomCost
