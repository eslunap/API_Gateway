const { gql } = require('apollo-server');

const editorialsTypeDefs = gql`
    type Editorial2  {
        id: Int
        nombre: String!
        
    }
    type Editorial1{
        Editorial1: [Editorial2]
    }

    input EditorialInput {
        nombre: String
    }

    extend type Query  {
        editorialsBybook: Editorial1

    }

    extend type Mutation {
        registerEditorial(editorial: EditorialInput): Editorial

    }
`;

module.exports =  editorialsTypeDefs;