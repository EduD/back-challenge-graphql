require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env",
    debug: process.env.DEBUG
});

import { ApolloServer } from 'apollo-server';
import typeDefs from '@schemas/index';
import resolvers from '@resolvers/index';
import db from '@db-models/index';

const server = new ApolloServer({ typeDefs, resolvers, context: async ({req}) => ({ db, req }), playground: {endpoint: "/graphql"} });
server.listen(process.env.SRV_PORT).then(({ url }) => console.log(`Server started at ${url}`)).catch((err)=> {console.log(`error started server at ${err}`)});

