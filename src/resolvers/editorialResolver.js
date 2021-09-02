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
        registerEditorial:(_, {editorial},{dataSources, userIdToken}) => {
            if (userIdToken){
                console.log(userIdToken)
                console.log("-----")
                return dataSources.booksAPI.registerEditorial(editorial);
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