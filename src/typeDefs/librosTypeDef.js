const { gql } = require('apollo-server');

const librosTypeDefs = gql`

    type Editorial  {
        id: Int
        nombre: String!        
    }
    type Categoria  {
        id: Int
        tipo: String! 
    }
    type Author  {
        id: Int
        nombres: String! 
    }

    type Libros2  {
        id: Int
        titulo: String
        ano: Int
        descripcion: String
        precio: Int
        cantidad: Int
        imagen: String,
        Author: Author,
        Category:Categoria,
        Editorial:Editorial
    }

    
    type Products  {
        id: Int
        titulo: String
        ano: Int
        descripcion: String
        precio: Int
        cantidad: Int
        imagen: String,
        Author: Author,
        Category:Categoria,
        Editorial:Editorial
    }

    type Productos{
        Productos:Products
    }

    type Libros{
        Libros:[Libros2]
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
        imagen: String,
        AuthorId:Int,
        CategoryId:Int,
        EditorialId:Int
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
        librossBybook : Libros
        libroBybookId (id: Int): Productos

    }


    extend type Mutation {
        changeLibros(libro: ChangeLibrosInput): Message
        registerLibros(libros: LibrosInput): MessageLibros
        updateCantidad(cantidad:UpdateCantidadInput): Message
        deleteLibroById(id: DeleteLibroInput): Message

    }
`;

module.exports =  librosTypeDefs;
