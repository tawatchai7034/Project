// import {Test} from '../src/server';
// Test()
import server from '../src/server'

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

const createServer = async () =>{
  
  try{
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0-wkqwc.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
      { useUnifiedTopology: true }
    );
    mongoose.set('useFindAndModify',false);

    const app = express()
    server.applyMiddleware({ app });

    app.listen({ port: process.env.PORT }, () =>
      console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
    )
  }
  catch(error){
     console.log(error);
  }
};
createServer();


