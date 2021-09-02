const { gql } = require('apollo-server');

const authorsTypeDefs = gql`
    type Author2  {
        Id: Int
        nombre: String!  
    }

    type Author1{
        Author:[Author2]

    }

    input AuthorInput {
        nombre: String
    }

    type Query  {
        authorsBybook: Author1

    }

    type Mutation {
        registerAuthor(author: AuthorInput): Author

    }
`;

module.exports =  authorsTypeDefs;