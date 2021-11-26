const validateUpdate = (updates, allowedUpdates) =>{
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    return isValidOperation
}

module.exports = validateUpdate
