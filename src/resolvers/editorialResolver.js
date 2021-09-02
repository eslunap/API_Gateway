const EditorialsResolver = {
    Query: {
        editorialsBybook: async (_, __, {dataSources,userIdToken})=> {
            if (userIdToken){
                const respuesta = await dataSources.booksAPI.editorialsBybook();
                console.log(respuesta)
                return { Editorial1: respuesta.editorial};
            }else{
                return null
            }
        }
    },
    Mutation: {
        registerEditorial:(_, {Editorial},{dataSources}) => {
            if (Editorial.userId == userIdToken){
                return dataSources.booksAPI.registerEditorial();
            }else{
                return null
            }
        }

    }
}

/* 
const EditorialsResolver = {
    Query: {
        EditorialsBybook: (_, {_}, {dataSources,userIdToken})=>
        dataSources.booksApi.editorialsBybook()
    },
    Mutation: {
        registerEditorial:(_, {Editorial},{dataSources}) => 
        dataSources.booksApi.registerEditorial()
    }
}
 */
module.exports = EditorialsResolver;