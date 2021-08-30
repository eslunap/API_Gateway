const productoImgResolver = {
       Mutation: {
        registerimg:(_, {img},{dataSources}) => {
            if (img.userId == userIdToken){
                return dataSources.booksAPI.registerimg();
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