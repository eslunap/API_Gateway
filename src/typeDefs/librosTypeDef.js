const { gql } = require('apollo-server');

const librosTypeDefs = gql`
    type Libros  {
        Id: Int
        Titulo: String
        Ano: Int
        Descripcion: String
        Precio: Int
        Cantidad: Int
        Imagen: String

        
    }

    input LibrosInput {
        Titulo: String
        Ano: Int
        Descripcion: String
        Precio: Int
        Cantidad: Int
        Imagen: String 
    }

    extends type Query  {
        librossBybook (): [Libros]
        libroBybookId (libroId: Int): Libros

    }


    extends type Mutation {
        registerLibros(libros: LibrosInput): Libros

    }
    `;

    //PUT de librosId y POST imagen


module.exports =  librosTypeDefs;
