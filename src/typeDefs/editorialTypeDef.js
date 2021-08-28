const { gql } = require('apollo-server');

const editorialsTypeDefs = gql`
    type Editorial  {
        Id: Int
        nombre: String!
        
    }

    input EditorialInput {
        nombre: String
    }

    extends type Query  {
        editorialsBybook (): [Editorial]

    }

    extends type Mutation {
        registerEditorial(editorial: EditorialInput): Editorial

    }
    `;

module.exports =  editorialsTypeDefs;