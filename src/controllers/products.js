import * as models from '../models';

export const getAllProducts = async (request, response) => {
    try {
        const products = await models.Product.find()
        response.status(200).send(products)
    } catch (error) {
        response.status(400).send({ message: 'Error when getting products', error })
    }
};

export const createProduct = async (request, response) => {
    const categoryId = request.params.categoryid
    try {
        const product = new models.Product({category: categoryId, ...request.body})
        console.log('entrou')
        await product.save()
        response.status(201).send({message: 'Product created succefully', product })
    } catch (error) {
        console.log(error)
        response.status(400).send({ message: 'Failed to create product', error })
    }
};