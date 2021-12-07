import * as models from '../../models';

const maxProductsPerOrder = 5


const getRandomNumberOfProductsIds = async () => {
    const products = await models.Product.find()

    const productsIdsArray = products.map((product) => product._id.toString())
    const shuffledProductsIdsArray = productsIdsArray.sort(() => 0.5 - Math.random())
    let maxProducts = maxProductsPerOrder

    if(shuffledProductsIdsArray.length < maxProductsPerOrder){
        maxProducts = shuffledProductsIdsArray.length
    }
    const randomNumberOfItemsSelected = Math.ceil(Math.random()*maxProducts)
    const randomProductsIds = shuffledProductsIdsArray.slice(0, randomNumberOfItemsSelected)

    return randomProductsIds
}

module.exports = getRandomNumberOfProductsIds
