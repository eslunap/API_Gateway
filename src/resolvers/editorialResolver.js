const EditorialsResolver = {
    Query: {
        editorialsBybook: (_, {_}, {dataSources,userIdToken})=> {
            if (userId == userIdToken){
                return dataSources.booksApi.editorialsBybook();
            }else{
                return null
            }
        }
    },
    Mutation: {
        registerEditorial:(_, {Editorial},{dataSources}) => {
            if (userId == userIdToken){
                return dataSources.booksApi.registerEditorial();
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