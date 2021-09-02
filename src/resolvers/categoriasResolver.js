const categoriasResolver = {
    Query: {
        categoriasBybook: (_, __, {dataSources,userIdToken})=> {
            if (userId == userIdToken){
                return dataSources.booksAPI.categoriasBybook();
            }else{
                return null
            }
        }
    },
    Mutation: {
        registerCategoria:(_, {categoria},{dataSources,userIdToken}) => {
            if (userIdToken){
                return dataSources.booksAPI.registerCategoria(categoria);
            }else{
                return null
            }
        }

    }
}

/* 
const categoriasResolver = {
    Query: {
        categoriasBybook: (_, {_}, {dataSources,userIdToken})=>
        dataSources.booksApi.categoriasBybook()
    },
    Mutation: {
        registerCategoria:(_, {categoria},{dataSources}) => 
        dataSources.booksApi.registerCategoria()
    }
}
 */
module.exports = categoriasResolver;