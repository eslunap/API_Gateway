const { gql } = require('apollo-server');

const categoriasTypeDefs = gql`
    type Categoria  {
        Id: Int
        nombre: String!
        
    }

    input CategoriaInput {
        nombre: String
    }

    extend type Query  {
        categoriasBybook: [Categoria]

    }

    extend type Mutation {
        registerCategoria(categoria: CategoriaInput): Categoria

    }
`;

module.exports =  categoriasTypeDefs;