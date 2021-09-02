const { gql } = require('apollo-server');

const ordersTypeDefs = gql `
    type Order{
        id: ID 
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
        getOrder(id: ID): Order
    }

    extend type Mutation{
        createOrder(order: OrderInput): Message
    }
`;

module.exports = ordersTypeDefs; 