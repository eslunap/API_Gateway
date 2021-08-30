const productoImgResolver = {
       Mutation: {
        registerimg:(_, {img},{dataSources}) => {
            if (userId == userIdToken){
                return dataSources.booksApi.registerimg();
            }else{
                return null
            }
        }

    }
}

/* 
const productoImgResolver = {
        Mutation: {
        registerimg:(_, {img},{dataSources}) => 
        dataSources.booksApi.registerimg()
    }
}
 */
module.exports = productoImgResolver;