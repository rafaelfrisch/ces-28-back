import * as models from '../../models'

const getReportOfOneOrder = async (order) => {
    let sales = 0
    let profit = 0
    let revenues = 0
    let mediumTicket = 0
    const categoryIds = {}

    for (const productOrder of order.products){
        try {
            
            const product = await models.Product.findById(productOrder.product)
            sales += productOrder.quantity
            revenues += productOrder.quantity * product.priceToConsumer
            profit += productOrder.quantity * (product.priceToConsumer - product.cost)
            if(categoryIds[product.category]!=undefined){
                categoryIds[product.category].sales += productOrder.quantity
                categoryIds[product.category].revenues += productOrder.quantity * product.priceToConsumer
                categoryIds[product.category].profit += productOrder.quantity * (product.priceToConsumer - product.cost)
            } else
                categoryIds[product.category] = {
                    sales: productOrder.quantity,
                    revenues: productOrder.quantity * product.priceToConsumer,
                    profit: productOrder.quantity * (product.priceToConsumer - product.cost)
                }
        } catch (error) {
            console.log(error)
        }
    }
    mediumTicket = revenues/sales

    return {
        sales, 
        revenues, 
        profit,
        mediumTicket,
        reportByCategory: categoryIds
    }
}

module.exports = getReportOfOneOrder
