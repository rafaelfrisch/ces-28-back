import * as models from '../../models';

const getRandomCategoryId = async () => {
    const categories = await models.Category.find()
    const categoriesIdsArray = categories.map((category) => category._id.toString())
    const randomIndex = Math.floor(Math.random()*categoriesIdsArray.length)
    return categoriesIdsArray[randomIndex]
}

module.exports = getRandomCategoryId
