import * as models from '../models';

export const getAllCategories = async (request, response) => {
    try {
        const categories = await models.Category.find()
        response.status(200).send(categories)
    } catch (error) {
        response.status(400).send({ message: 'Error when getting categories', error })
    }
};

export const createCategory = async (request, response) => {
    try {
        const category = new models.Category(request.body)
        await category.save()
        response.status(201).send({message: 'Category created succefully', category })
    } catch (error) {
        response.status(400).send({ message: 'Failed to create category', error })
    }
};

export const getAllProductsInCategory = async (request, response) => {
    try {
        const categoryWithProducts = await models.Category.findById(request.params.categoryid).populate('products')
        response.status(201).send({message: 'Products found succefully', products: categoryWithProducts.products })
    } catch (error) {
        response.status(400).send({ message: 'Failed to find products in category', error })
    }
};