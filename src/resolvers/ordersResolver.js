const ordersResolver = {
    Query:{
        getOrder:(_, {orderId},{dataSources})=>{
            return dataSources.ordersAPI.getOrder(orderId)
        },

    },
    Mutation:{
        createOrder:(_, {order},{dataSources})=> {
            return dataSources.ordersAPI.createOrder(order)
        },

    }

};

module.exports = ordersResolver;