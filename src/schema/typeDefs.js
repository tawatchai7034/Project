import {gql} from 'apollo-server-express';

export const typeDefs = gql`
    type User {
        id: ID!
        name: String!
    }

    type Query{
        me:user!
        user(id: ID!):user
        users:[user]!
        
        animal(id:ID!):Animal
        animals:[Animal]!
    }
    # การบ้านสร้าง type animal
    type Animal{
    id: ID!
    an_name: String!
    an_discription: String
    an_age:Int!
    an_price:Float!
    }
`;
export default typeDefs;