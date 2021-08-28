const { gql } = require('apollo-server');

const productoImgTypeDefs = gql`
    type img  {
        img: String
        
    }

    input imgInput {
        img: String
    }

    }

    extends type Mutation {
        registerimg(img: imgInput): img

    }
    `;

module.exports =  productoImgTypeDefs;