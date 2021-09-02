const ordersResolver = {
    Query:{
        getOrder: async(_, {id},{dataSources})=>{
            console.log(id)
            console.log("-----")
            const respuesta = await dataSources.ordersAPI.getOrder(id)
            return {...respuesta.order, id: respuesta.order._id}
        },

    },
    Mutation:{
        createOrder:(_, {order},{dataSources, userIdToken})=> {
            console.log(userIdToken)
            console.log(order.id_usuario)
            console.log("-----")
            if(order.id_usuario==userIdToken){
                console.log("prueba")
                return dataSources.ordersAPI.createOrder(order)
            }else{
                return null
            }
        }

    }

};

module.exports = ordersResolver;