const librosResolver = {
    Query: {
        librossBybook: (_, __, {dataSources,userIdToken})=> {
            if (userId == userIdToken){
                return dataSources.booksAPI.librossBybook();
            }else{
                return null
            }
        },
        libroBybookId: (_, {libroId}, {dataSources,userIdToken})=> {
            if (libroId.userId == userIdToken){
                return dataSources.booksAPI.libroBybookId();
            }else{
                return null
            }
        }
    },
    Mutation: {
        registerLibros:(_, {libros},{dataSources}) => {
            if (libros.userId == userIdToken){
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