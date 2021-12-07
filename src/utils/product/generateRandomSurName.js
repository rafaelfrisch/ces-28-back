const maxSurName = 1000

const generateRandomSurName = () => {
    const randomSurName = (Math.floor(Math.random() * maxSurName)).toString() 
    return randomSurName
}

module.exports = generateRandomSurName
