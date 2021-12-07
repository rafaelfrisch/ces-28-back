const maxStock = 50

const generateRandomStock = () => {
    const randomStock = Math.ceil(Math.random() * maxStock) 
    return randomStock
}

module.exports = generateRandomStock
