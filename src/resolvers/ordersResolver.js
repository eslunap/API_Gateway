const ordersResolver = {
    Query:{
        getOrder:(_, {orderId},{dataSources})=>{
            return dataSources.ordersAPI.getOrder(orderId)
        },

    },
    Mutation:{
        createOrder:(_, {order},{dataSources, userIdToken})=> {
            console.log(userIdToken)
            console.log(order.id_usuario)
            console.log("-----")
            if(order.id_usuario==userIdToken){
                return dataSources.ordersAPI.createOrder(order)
            }else{
                return null
            }
        }

    }

};

module.exports = ordersResolver;