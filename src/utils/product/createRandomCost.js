const maxCost = 1000

const createRandomCost = () => {
    const randomCost = (Math.random()*maxCost).toFixed(2)
    return randomCost
}

module.exports = createRandomCost
