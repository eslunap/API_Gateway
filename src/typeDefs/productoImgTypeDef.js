const { gql } = require('apollo-server');

const productoImgTypeDefs = gql`
    type Imagen  {
        Imagen: String
        
    }

    input ImagenInput {
        Imagen: String
    }

    }

    extends type Mutation {
        registerImagen(Imagen: ImagenInput): Imagen

    }
    `;

module.exports =  productoImgTypeDefs;