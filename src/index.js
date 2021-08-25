
const {ApolloServer} = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const UsersAPI = require ('./dataSources/usersApi');
const BooksAPI = require ('./dataSources/booksApi');
const authentication = require ('./utils/authentication');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources:()=>({
        usersAPI: new UsersAPI(),
        booksAPI: new BooksAPI(),
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});