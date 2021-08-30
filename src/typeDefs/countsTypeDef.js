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
        createCount(count: CountInput): Message!
        countByUserId: Message!
    }
`;

module.exports = countsTypeDefs; 