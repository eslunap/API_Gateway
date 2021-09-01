const countsResolver = {
    Mutation:{
        createCount:(_, {count}, {dataSources, userIdToken})=>{
            if(count.userId == userIdToken){
                return dataSources.usersAPI.createCount(userId)
            }else{
                return null
            }
        },
        countByUserId:(_, {transaction }, {dataSources, userIdToken})=>{
            console.log(userIdToken)
            console.log(transaction.userId)
            console.log("-----")
            if(transaction.userId==userIdToken){
                return dataSources.usersAPI.countByUserId(transaction)
            }else{
               return null 
            }

        }
        
    }
};

module.exports = countsResolver;