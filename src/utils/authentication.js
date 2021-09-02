const {ApolloError} = require('apollo-server');
const serverConfig = require('../server');
const fetch = require ('node-fetch');

const authentication = async ({ req }) => {
    const token = req.headers.authorization || '';
    // console.log(token)
    if (token == '')
        return { userIdToken: null}
    else{
        try{
           // console.log("1")
            let requestOptions = {method:'POST',headers:{"Content-Type":"application/json"},body: JSON.stringify({ token}), redirect: 'follow'};
            //console.log("2")
            let response = await fetch(`${serverConfig.users_api_url}/token/`, requestOptions)
           //console.log("3",await response.json())

            if (response.status != 200) throw new ApolloError(`SESION INACTIVA - ${401}`, 401)
                //console.log("sesion inactiva")
            const userIdToken = (await response.json()).id
            // console.log("Aqui se hace autenticacion")
            // console.log(userIdToken)
            return { userIdToken};
            
        }
        catch(error){
            throw new ApolloError(`TOKEN ERROR: ${500}: ${error}`,500);
        }
    }
}

module.exports = authentication;