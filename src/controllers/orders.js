import * as models from '../models';

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

        const orders = await models.Order.find({ orderDate: { $gte: initialDate, $lte: finalDate } })
        response.status(200).send(orders)
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

        const orders = await models.Order.find({ orderDate: { $gte: initialDate, $lte: finalDate } })
        response.status(200).send(orders)
    } catch (error) {
        response.status(400).send({ message: 'Error when getting orders', error })
    }
}