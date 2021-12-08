const mergeCategory = (categoryReport, categoryObject) => {
    for(const categoryId in categoryObject){
        if(categoryReport[categoryId]!=undefined){
            categoryReport[categoryId].sales += categoryObject[categoryId].sales
            categoryReport[categoryId].revenues += categoryObject[categoryId].revenues
            categoryReport[categoryId].profit += categoryObject[categoryId].profit
        } else {
            categoryReport[categoryId] = categoryObject[categoryId]
        }
    }
    return categoryReport
}

module.exports = mergeCategory
