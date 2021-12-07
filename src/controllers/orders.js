import * as models from '../models';
import * as utils from '../utils';

export const createOrder = async (request, response) => {
    const userId = request.params.userid
    
    try {
        const order = new models.Order({user: userId, ...request.body})
        await order.save()
        response.status(201).send({message: 'Order created succefully', order })
    } catch (error) {
        console.log(error)
        response.status(400).send({ message: 'Failed to create order', error })
    }
};

export const filterOrdersByDate = async (request, response) => {
    try {
        const { initialDateParam, finalDateParam } = request.query
        const initialDate = new Date(initialDateParam)
        const finalDate = new Date(finalDateParam)

        if(initialDate > finalDate)
            return response.status(404).send({ message: 'Final date after initial date'})

        const orders = await models.Order.find({ orderDate: { $gte: initialDate, $lte: finalDate } }).sort({ orderDate: -1 })
        response.status(200).send(orders)
    } catch (error) {
        response.status(400).send({ message: 'Error when getting orders', error })
    }
}

export const getReportOfOrderById = async (request, response) => {
    
    try {
        const order = await models.Order.findById(request.params.orderid)
        const report = await utils.getReportOfOneOrder(order)
        response.status(200).send(report)
    } catch (error) {
        response.status(400).send({ message: 'User not found', error })       
    }
}

export const getReportByDay = async (request, response) => {
    try {
        const { dateParam } = request.query
        const date = new Date(dateParam)
        const year = date.getFullYear()
        const month = date.getMonth()
        const day = date.getDate()
        const initialDate = new Date(year, month, day)
        const finalDate = new Date(year, month, day+1)

        const orders = await models.Order.find({ orderDate: { $gte: initialDate, $lt: finalDate } }).sort({ orderDate: 1 })

        const report = await utils.getReportByDay(orders)
        console.log(report)
        response.status(200).send(report)
    } catch (error) {
        response.status(400).send({ message: 'Error when getting orders', error })
    }
}

export const getOrderReportByDate = async (request, response) => {

    try {
        const { initialDateParam, finalDateParam } = request.query
        const initialDate = new Date(initialDateParam)
        const finalDate = new Date(finalDateParam)

        if(initialDate > finalDate)
            return response.status(404).send({ message: 'Final date after initial date'})

        const orders = await models.Order.find({ orderDate: { $gte: initialDate, $lte: finalDate } }).sort({ orderDate: 1 })

        const arrayOfSameDateOrders = []
        let auxDate = new Date(+finalDate +(finalDate-initialDate))

        orders.forEach((order) => {
            let orderDate = order.orderDate
            if(!utils.datesAreOnSameDay(auxDate,orderDate)){
                auxDate = orderDate
                arrayOfSameDateOrders.push([order])
            }
            else
                arrayOfSameDateOrders[arrayOfSameDateOrders.length-1].push(order)
        })
        
        const reportsByDay = arrayOfSameDateOrders.map(async(orderArrayOnDay) => {
            const date = orderArrayOnDay[0].orderDate
            const reportByDay = await utils.getReportByDay(orderArrayOnDay)
            return {
                date,
                reportByDay
            }
        })

        
        // const reportsByDay = arrayOfSameDateOrders.map(async(orderArrayOnDay) => {
        //     const date = orderArrayOnDay[0].orderDate
        //     const reportsByEachOrder = await orderArrayOnDay.map(async (order) => {
        //         let sales = 0
        //         let profit = 0
        //         let revenues = 0
        //         let mediumTicket = 0
        //         for (const productOrder of order.products){
        //             try {
        //                 const product = await models.Product.findById(productOrder.product)
        //                 sales += productOrder.quantity
        //                 revenues += productOrder.quantity * product.priceToConsumer
        //                 profit += productOrder.quantity * (product.priceToConsumer - product.cost)
        //             } catch (error) {
        //                 console.log(error)
        //             }
        //         }
        //         mediumTicket = revenues/sales
                
        //         return {
        //             sales,
        //             profit,
        //             revenues,
        //             mediumTicket
        //         }
        //     })
        //     console.log(reportsByEachOrder)
        //     return {
        //         date,
        //         reportsByEachOrder
        //     }
        // })

        // const reportsByDay = arrayOfSameDateOrders.map((orderArrayOnDay) => {
        //     const date = orderArrayOnDay[0].orderDate
        //     const reportsByEachOrder = orderArrayOnDay.map((order) => {
        //         let sales = 0
        //         let profit = 0
        //         let revenues = 0
        //         let mediumTicket = 0
        //         order.products.forEach(async (productOrder) => {
        //             const product = await models.Product.findById(productOrder.product)
        //             console.log(product.name)
        //             sales += productOrder.quantity
        //             revenues += productOrder.quantity * product.priceToConsumer
        //             profit += productOrder.quantity * (product.priceToConsumer - product.cost)
        //         })
        //         mediumTicket = revenues/sales
        //         return {
        //             sales,
        //             profit,
        //             revenues,
        //             mediumTicket
        //         }
        //     })
        //     return {
        //         date,
        //         reportsByEachOrder
        //     }
        // })

        response.status(200).send(reportsByDay)
    } catch (error) {
        response.status(400).send({ message: 'Error when getting orders', error })
    }
}