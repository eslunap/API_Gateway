const { gql } = require('apollo-server');

const countsTypeDefs = gql`

    type Message{
        mensaje: String!
    }

    input CountTransactionInput{
        monto: Int!
    }

    input CountInput {
        userId: String!
        monto: Int!
    }
    
    extends type Mutation {
        createCount(count: CountInput): Message!
        countByUserId(transaction: CountTransactionInput): Message!
    }
`;

module.exports = countsTypeDefs; 