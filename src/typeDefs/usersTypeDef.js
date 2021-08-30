const { gql } = require('apollo-server');


const usersTypeDefs =gql`

    type Success{
        success: String!
    }
    
    type LoginSuccess{
        success: String!
        token: String
    }

    input UserInput{
        nombre: String!
        direccion: String!
        email: String!
        password: String!
        tipo_usuario: String!
        numero: Int!
    }

    input UserLogin{
        email: String!
        password: String!
    }

    type Mutation{
        createUser(user: UserInput): Success!
        loginUser(login: UserLogin): LoginSuccess!
    }

`;

module.exports = usersTypeDefs; 
