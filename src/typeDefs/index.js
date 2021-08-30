const librosTypeDefs = require ('./librosTypeDef');
const authorTypeDefs = require ('./authorTypeDef');
const categoriasTypeDefs = require ('./categoriasTypeDef');
const editorialTypeDefs = require ('./editorialsTypeDef');
const productoImgTypeDefs = require ('./productoImgTypeDef');
const ordersTypeDefs = require('./ordersTypeDef');
const usersTypeDefs = require('./usersTypeDef');
const countsTypeDefs = require('./countsTypeDef');

const schemasArray = [

    authorTypeDefs,
    categoriasTypeDefs,
    editorialTypeDefs,
    librosTypeDefs,
    productoImgTypeDefs,
    ordersTypeDefs,
    usersTypeDefs,
    countsTypeDefs
];

module.exports = schemasArray;
 




