const usersResolver ={
    Mutation:{
        createUser:(_, {user},{dataSources})=> {
            return dataSources.usersAPI.createUser(user)
        },
        
            loginUser:(_,{login},{dataSources})=> {
            return dataSources.usersAPI.loginUser(login)
        }
    }

};

module.exports = usersResolver;