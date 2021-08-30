const ordersResolver = {
    Mutation:{
        createOrder:(_, {order},{dataSources})=> {
            return dataSources.ordersAPI.createOrder(order)
        },

    }

};

module.exports = ordersResolver;