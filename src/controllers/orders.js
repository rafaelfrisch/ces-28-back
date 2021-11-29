import * as models from '../models';

export const createOrder = async (request, response) => {
    const categoryId = request.params.categoryid
    try {
        const product = new models.Product({category: categoryId, ...request.body})
        await product.save()
        response.status(201).send({message: 'Product created succefully', product })
    } catch (error) {
        console.log(error)
        response.status(400).send({ message: 'Failed to create product', error })
    }
};
