const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3333;
const app = express();

const startServer = async () => {
    // create a new Apollo server and pass in our schema data
    const server = new ApolloServer({ 
      typeDefs, 
      resolvers
    });
  
    // Start the Apollo server
    await server.start();
  
    // integrate our Apollo server with the Express application as middleware
    server.applyMiddleware({ app });
  
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};
  
// Initialize the Apollo server
startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
// app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.get('/', (req, res) => {
//     res.json({
//         message: 'Test Server on 3333'
//     });
// });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Start server after DB connection
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});