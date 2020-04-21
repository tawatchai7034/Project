import Mutation from './Mutation'
import Query from './Query'
import {GraphQLDateTime} from 'graphql-iso-date'

const resolvers = {
  Query,Mutation,
  Date: GraphQLDateTime
};

export default resolvers;
