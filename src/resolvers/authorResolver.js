const authorResolver = {
    Query: {
        authorsBybook: (_, __, {dataSources,userIdToken})=> {
            if (userIdToken){
                return dataSources.booksAPI.authorsBybook();
            }else{
                return null
            }
        }
    },
    Mutation: {
        registerAuthor:(_, {author},{dataSources}) => {
            if (author.userId == userIdToken){
                return dataSources.booksAPI.registerAuthor();
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