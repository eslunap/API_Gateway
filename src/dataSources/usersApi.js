const { RESTDataSource } = require("apollo-datasource-rest");

const {users_api_url} =require('../server');

class UsersAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = users_api_url;
    }

    async createCount(count){
        count = new Object(JSON.parse(JSON.stringify(count)));
        return await this.post(`/counts`,count);
    }

    async countByUserId(transaction){
        transaction = new Object(JSON.parse(JSON.stringify(transaction)));
        return await this.put(`/counts/${userId}`);
    }

    async createUser(user){
        user = new Object(JSON.parse(JSON.stringify(user)));
        return await this.post(`/usuarios`,user);
    }

    async loginUser(login){
        login = new Object(JSON.parse(JSON.stringify(login)));
        return await this.post(`/login`,login);
    }
}

module.exports = UsersAPI;