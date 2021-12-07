import * as models from '../../models'
const getReportOfOneOrder = require('./getReportOfOneOrder')

const getReportByDay = async (orderArray) => {
    const reportsByDay = []
    for (const order of orderArray){
        const report = await getReportOfOneOrder(order)
        reportsByDay.push(report)
    }
    return reportsByDay
}

module.exports = getReportByDay
