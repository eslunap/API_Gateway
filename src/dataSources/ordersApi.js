const { RESTDataSource } = require("apollo-datasource-rest");

const {orders_api_url} = require('../server');
class OrdersAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = orders_api_url;
    }

    async createOrder(order){
        return await this.post('/order',{ ...order});
    }

}

module.exports = OrdersAPI;