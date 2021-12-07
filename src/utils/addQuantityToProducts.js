const maxNumberOfSalesOfProduct = 5

const addQuantityToProducts = (productsIdsArray) => {
    const newProductsArray = productsIdsArray.map((product) => 
    {   
        const numberOfSalesOfProduct = Math.ceil(Math.random()*maxNumberOfSalesOfProduct)
        return {
            product,
            quantity: numberOfSalesOfProduct
        }
    })
    return newProductsArray
}

module.exports = addQuantityToProducts
