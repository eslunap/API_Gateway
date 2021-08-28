const authorResolver = {
    Query: {
        authorBybook: (_, {_}, {dataSources,userIdToken})=> {
            if (userId == userIdToken){
                return dataSources.booksApi.authorBybook();
            }else{
                return null
            }
        }
    },
    Mutation: {
        registerAuthor:(_, {author},{dataSources}) => {
            if (userId == userIdToken){
                return dataSources.booksApi.registerAuthor();
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