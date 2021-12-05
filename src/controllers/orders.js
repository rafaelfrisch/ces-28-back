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