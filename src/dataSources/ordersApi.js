const { RESTDataSource } = require("apollo-datasource-rest");

const {orders_api_url} = require('../server');
class OrdersAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = orders_api_url;
    }

    async createOrder(order){
        console.log(order)
        return await this.post('/order',{ ...order});
    }

    async getOrder(id){
        console.log(id)
        const respuesta = await this.get('/order',{ ...id});
        console.log(respuesta)
        return await this.get('/order',{ ...id});
    }

}

module.exports = OrdersAPI;