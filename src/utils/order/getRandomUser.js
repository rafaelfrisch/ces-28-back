import * as models from '../../models';

const getRandomUserId = async () => {
    const users = await models.User.find()
    const usersIdsArray = users.map((user) => user._id.toString())
    const randomIndex = Math.floor(Math.random()*usersIdsArray.length)
    return usersIdsArray[randomIndex]
}

module.exports = getRandomUserId
