const validateUpdate = require('./validateUpdate');
const createRandomOrder = require('./order/createRandomOrder');
const createRandomProduct = require('./product/createRandomProduct');
const datesAreOnSameDay = require('./datesAreOnSameDay');
const getReportOfOneOrder = require('./order/getReportOfOneOrder');
const getReportByDay = require('./order/getReportByDay');

module.exports = {
    validateUpdate,
    createRandomOrder,
    createRandomProduct,
    datesAreOnSameDay,
    getReportOfOneOrder,
    getReportByDay
}
