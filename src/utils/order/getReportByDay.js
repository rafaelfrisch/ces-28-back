import * as models from '../../models'
const getReportOfOneOrder = require('./getReportOfOneOrder')
const mergeCategory = require('./mergeCategory')

const getReportByDay = async (orderArray) => {
    const dayReport = {
        numOrders: orderArray.length,
        sales: 0,
        revenues: 0,
        profit: 0,
        mediumticket: 0,
    }
    let categoryReport = {}
    for (const order of orderArray){
        const report = await getReportOfOneOrder(order)
        dayReport.sales += report.sales
        dayReport.revenues += report.revenues
        dayReport.profit += report.profit
        categoryReport = mergeCategory(categoryReport, report.reportByCategory)
    }
    dayReport.mediumticket = dayReport.revenues/dayReport.numOrders
    console.log(categoryReport)
    return dayReport
}

module.exports = getReportByDay
