const librosResolver = {
    Query: {
        librossBybook: (_, {_}, {dataSources,userIdToken})=> {
            if (userId == userIdToken){
                return dataSources.booksApi.librossBybook();
            }else{
                return null
            }
        },
        libroBybookId: (_, {libroId}, {dataSources,userIdToken})=> {
            if (userId == userIdToken){
                return dataSources.booksApi.libroBybookId();
            }else{
                return null
            }
        }
    },
    Mutation: {
        registerLibros:(_, {libros},{dataSources}) => {
            if (userId == userIdToken){
                return dataSources.booksApi.registerLibros();
            }else{
                return null
            }
        }

    }
}

/* 
const librosResolver = {
    Query: {
        librossBybook: (_, {_}, {dataSources,userIdToken})=>
        dataSources.booksApi.librossBybook(),
        dataSources.booksApi.libroBybookId(),
    },
    Mutation: {
        registerLibros:(_, {libros},{dataSources}) => 
        dataSources.booksApi.registerLibros()
    }
}
 */
module.exports = librosResolver;