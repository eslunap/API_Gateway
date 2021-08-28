const categoriasResolver = {
    Query: {
        categoriasBybook: (_, {_}, {dataSources,userIdToken})=> {
            if (userId == userIdToken){
                return dataSources.booksApi.categoriasBybook();
            }else{
                return null
            }
        }
    },
    Mutation: {
        registerCategoria:(_, {categoria},{dataSources}) => {
            if (userId == userIdToken){
                return dataSources.booksApi.registerCategoria();
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