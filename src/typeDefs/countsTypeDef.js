const { gql } = require('apollo-server');

const countsTypeDefs = gql`

    type Message{
        mensaje: String!
    }

    input CountInput {
        userId: String!
        monto: Int!
    }
    
    type Mutation {
        countByUserId(count: CountInput): Message!
    }
`;

module.exports = countsTypeDefs; 