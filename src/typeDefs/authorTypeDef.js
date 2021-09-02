const { gql } = require('apollo-server');

const authorsTypeDefs = gql`
    type Author1{
        Author1:[Author]

    }

    input AuthorInput {
        nombres: String
    }

    type Query  {
        authorsBybook: Author1

    }

    type Mutation {
        registerAuthor(author: AuthorInput): Success

    }
`;

module.exports =  authorsTypeDefs;