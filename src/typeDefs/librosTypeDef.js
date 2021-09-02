const { gql } = require('apollo-server');

const librosTypeDefs = gql`
    type Libros  {
        id: Int
        titulo: String
        ano: Int
        descripcion: String
        precio: Int
        cantidad: Int
        imagen: String
    }

    type Message{
        mensaje: String
    }

    type MessageLibros{
        success: String
    }

    input DeleteLibroInput{
        id: Int
    }
    input LibrosInput {
        titulo: String
        ano: Int
        descripcion: String
        precio: Int
        cantidad: Int
        imagen: String
    }

    input ChangeLibrosInput{
        id: Int
        cantidad: Int
        precio: Int
    }

    input UpdateCantidadInput{
        id: Int
        cantidad: Int
    }

    extend type Query  {
        librossBybook : [Libros]
        libroBybookId (libroId: Int): Libros

    }


    extend type Mutation {
        changeLibros(libro: ChangeLibrosInput): Message
        registerLibros(libros: LibrosInput): MessageLibros
        updateCantidad(cantidad:UpdateCantidadInput): Message
        deleteLibroById(bookId: Int): Message

    }
`;

    //PUT de librosId y POST imagen


module.exports =  librosTypeDefs;
