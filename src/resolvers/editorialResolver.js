const EditorialsResolver = {
    Query: {
        editorialsBybook: (_, __, {dataSources,userIdToken})=> {
            if (userId == userIdToken){
                return dataSources.booksAPI.editorialsBybook();
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