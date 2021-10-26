const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./Schema");

const connectDB = require("./db/connect");

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

connectDB();
app.listen(5000, () => console.log("Server running on port 5000"));
