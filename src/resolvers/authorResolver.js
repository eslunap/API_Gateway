const authorResolver = {
    Query: {
        authorsBybook: async (_, __, {dataSources,userIdToken})=> {
            if (userIdToken){
                const respuesta = await dataSources.booksAPI.authorsBybook();
                console.log(respuesta)
                return {Author1: respuesta.author};
            }else{
                return null
            }
        }
    },
    Mutation: {
        registerAuthor:(_, {author},{dataSources,userIdToken}) => {
            if (userIdToken){
                console.log(userIdToken)
                console.log("-----")
                console.log("if register")
                return dataSources.booksAPI.registerAuthor(author);
            }else{
                return null
            }
        }

    }
}

/* 
const authorResolver = {
    Query: {
        authorBybook: (_, {_}, {dataSources,userIdToken})=>
        dataSources.booksApi.authorBybook()
    },
    Mutation: {
        registerAuthor:(_, {author},{dataSources}) => 
        dataSources.booksApi.registerAuthor()
    }
}
 */
module.exports = authorResolver;