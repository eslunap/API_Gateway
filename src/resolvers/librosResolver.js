const librosResolver = {
    Query: {
        librossBybook: (_, __, {dataSources,userIdToken})=> {
            if (userIdToken){
                console.log("if",userIdToken)
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
        registerLibros:(_, {libros},{dataSources,userIdToken}) => {
            if (userIdToken){
                console.log(userIdToken)
                console.log("-----")
                console.log("if register")
                return dataSources.booksAPI.registerLibros(libros);
            }else{
                return null
            }
        },
        changeLibros:(_,{libro},{dataSources, userIdToken})=>{
            console.log(userIdToken)
            console.log("-----")
            if (userIdToken){
                console.log("if")
                return dataSources.booksAPI.changeLibros(libro);
            }else{
                console.log("else")
                return null
            }
        },
        deleteLibroById:(_, {id},{dataSources, userIdToken})=>{
            if (userIdToken){
                console.log(id)
                console.log("-----")
                return dataSources.booksAPI.deleteLibroById(id);
            }else{
                console.log("else")
                return null
            }
        },
        updateCantidad:(_,{cantidad},{dataSources, userIdToken})=>{
            if(userIdToken){
                console.log(userIdToken)
                console.log("------")
                return dataSources.booksAPI.updateCantidad(cantidad);
            }else{
                console.log("else")
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