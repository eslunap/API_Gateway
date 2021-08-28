const { gql } = require('apollo-server');

const categoriasTypeDefs = gql`
    type Categoria  {
        Id: Int
        nombre: String!
        
    }

    input CategoriaInput {
        nombre: String
    }

    extends type Query  {
        categoriasBybook (): [Categoria]

    }

    extends type Mutation {
        registerCategoria(categoria: CategoriaInput): Categoria

    }
    `;

module.exports =  categoriasTypeDefs;