import * as models from '../../models'
const getReportOfOneOrder = require('./getReportOfOneOrder')

const getReportByDay = async (orderArray) => {
    const dayReport = {
        numOrders: orderArray.length,
        sales: 0,
        revenues: 0,
        profit: 0,
        mediumticket: 0,
    }
    for (const order of orderArray){
        const report = await getReportOfOneOrder(order)
        dayReport.sales += report.sales
        dayReport.revenues += report.revenues
        dayReport.profit += report.profit
    }
    dayReport.mediumticket = dayReport.revenues/dayReport.numOrders
    
    return dayReport
}

module.exports = getReportByDay
