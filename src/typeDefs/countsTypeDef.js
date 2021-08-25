const { gql } = require('apollo-server');

const countsTypeDefs = gql`
    type Count {
        userId: String!
        monto: Int
    }
    
    type Mutation {
        countByUserId(userId: String!): Count
    }
`;

module.exports = countsTypeDefs; 