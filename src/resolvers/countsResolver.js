const countsResolver = {
    Mutation:{
        createCount:(_, {count}, {dataSources, userIdToken})=>{
            if(count.userId == userIdToken){
                return dataSources.usersAPI.createCount(userId)
            }else{
                return null
            }
        },
        countByUserId:(_, {transaction, userId}, {dataSources, userIdToken})=>{
            if(transaction.userId==userIdToken){
                return dataSources.usersAPI.countByUserId(userId)
            }else{
                return null
            }
        }
        
    }
};

module.exports = countsResolver;