const { gql } = require('apollo-server');

const authorsTypeDefs = gql`
    type author  {
        Id: Int
        nombre: String!
        
    }

    input AuthorInput {
        nombre: String
    }

    type Query  {
        authorsBybook (): [Author]

    }

    type Mutation {
        registerAuthor(author: AuthorInput): Author

    }
    `;

module.exports =  authorsTypeDefs;