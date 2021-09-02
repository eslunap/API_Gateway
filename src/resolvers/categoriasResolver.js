const categoriasResolver = {
    Query: {
        categoriasBybook: async (_, __, {dataSources,userIdToken})=> {
            if (userIdToken){
                const respuesta = await dataSources.booksAPI.categoriasBybook();
                console.log(respuesta)
                return {Categoria1: respuesta.categorias }
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