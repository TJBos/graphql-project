const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schemas");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(cors());

const mongoose = require("./database/dbcon");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server started");
});
