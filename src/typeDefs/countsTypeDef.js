const { gql } = require('apollo-server');

const countsTypeDefs = gql`

    type Message{
        mensaje: String
    }

    input CountTransactionInput{
        userId:Int
        monto: Int!
    }

    input CountInput {
        userId: Int
        monto: Int!
    }
    
    extend type Mutation {
        createCount(count: CountInput): Message
        countByUserId(transaction: CountTransactionInput): Message
    }
`;

module.exports = countsTypeDefs; 