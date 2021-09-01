const { gql } = require('apollo-server');

const countsTypeDefs = gql`

    type Message{
        mensaje: String
    }

    input CountTransactionInput{
        monto: Int!
    }

    input CountInput {
        userId: String!
        monto: Int!
    }
    
    extend type Mutation {
        createCount(count: CountInput): Message
        countByUserId(userId:String, transaction: CountTransactionInput): Message!
    }
`;

module.exports = countsTypeDefs; 