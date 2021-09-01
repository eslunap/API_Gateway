const { gql } = require('apollo-server');

const ordersTypeDefs = gql `
    type Order{
        fecha:String
        precio:Int
        cantidad:Int
        id_producto:Int
        id_usuario:Int
    }    

    type Message{
        mensaje: String
    }
    
    input OrderInput {
        fecha:String
        precio:Int
        cantidad:Int
        id_producto:Int
        id_usuario:Int
    }

    extend type Query{
        getOrder(orderId:String): Order
    }

    extend type Mutation{
        createOrder(order: OrderInput): Message
    }
`;

module.exports = ordersTypeDefs; 