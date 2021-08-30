const countsResolver = require('./countsResolver');
const usersResolver = require('./usersResolver');
const ordersResolver = require('./ordersResolver');
const authorResolver = require('./authorResolver');
const categoriasResolver = require ('./categoriasResolver');
const editorialResolver = require ('./editorialResolver');
const librosResolver = require ('./librosResolver');
const productoImgResolver = require ('./productoImgResolver');

const lodash = require('lodash');

const resolvers = lodash.merge(countsResolver, usersResolver,ordersResolver,authorResolver, categoriasResolver,editorialResolver, librosResolver,productoImgResolver);

module.exports = resolvers;