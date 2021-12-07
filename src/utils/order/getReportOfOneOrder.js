import * as models from '../../models'

const getReportOfOneOrder = async (order) => {
    let sales = 0
    let profit = 0
    let revenues = 0
    let mediumTicket = 0

    for (const productOrder of order.products){
        try {
            
            const product = await models.Product.findById(productOrder.product)
            sales += productOrder.quantity
            revenues += productOrder.quantity * product.priceToConsumer
            profit += productOrder.quantity * (product.priceToConsumer - product.cost)
        } catch (error) {
            console.log(error)
        }
    }

    mediumTicket = revenues/sales

    return {
        sales, 
        revenues, 
        profit,
        mediumTicket
    }
}

module.exports = getReportOfOneOrder
