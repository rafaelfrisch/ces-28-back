const generateRandomDate = (minDate, maxDate) => {
    const min = new Date(minDate)
    const max = new Date(maxDate)

    return new Date(+min + Math.random() * (max-min))
}

module.exports = generateRandomDate
