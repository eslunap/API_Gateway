const { gql } = require('apollo-server');

const editorialsTypeDefs = gql`
    type Editorial  {
        id: Int
        nombre: String!
        
    }

    input EditorialInput {
        nombre: String
    }

    extend type Query  {
        editorialsBybook: [Editorial]

    }

    extend type Mutation {
        registerEditorial(editorial: EditorialInput): Editorial

    }
`;

module.exports =  editorialsTypeDefs;