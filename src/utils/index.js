const validateUpdate = require('./validateUpdate');
const createRandomOrder = require('./order/createRandomOrder');
const createRandomProduct = require('./product/createRandomProduct');
const datesAreOnSameDay = require('./datesAreOnSameDay');

module.exports = {
    validateUpdate,
    createRandomOrder,
    createRandomProduct,
    datesAreOnSameDay
}
