import * as models from '../../models';

const getRandomNumberOfProductsIds = async () => {
    const products = await models.Product.find()

    const productsIdsArray = products.map((product) => product._id.toString())
    const shuffledProductsIdsArray = productsIdsArray.sort(() => 0.5 - Math.random())

    const randomNumberOfItemsSelected = Math.ceil(Math.random()*shuffledProductsIdsArray.length)
    const randomProductsIds = shuffledProductsIdsArray.slice(0, randomNumberOfItemsSelected)

    return randomProductsIds
}

module.exports = getRandomNumberOfProductsIds
