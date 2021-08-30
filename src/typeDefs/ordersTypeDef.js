const { gql } = require('apollo-server');

const ordersTypeDefs = gql `
        
    type Message{
        mensaje: String!
    }
    
    input OrderInput {
        fecha:Date
        precio:Int
        cantidad:Int
        id_producto:Int
        id_usuario:Int
    }

    extend type Mutation{
        createOrder(order: OrderInput):Message!
    }
`;

module.exports = ordersTypeDefs; 