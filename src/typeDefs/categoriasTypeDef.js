const { gql } = require('apollo-server');

const categoriasTypeDefs = gql`
    type Categoria1  {
        Categoria1:[Categoria]
        
    }

    input CategoriaInput {
        tipo: String
    }

    extend type Query  {
        categoriasBybook: Categoria1

    }

    extend type Mutation {
        registerCategoria(categoria: CategoriaInput): Success

    }
`;

module.exports =  categoriasTypeDefs;