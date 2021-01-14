const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server started at port" + PORT);
});

//go to localhost:5000/graphql and make queries in this supercool graphicql tool like so:
//{ launches {mission_name, mission_date, ...} } => you basically choose yourself which fields you like to return!
//or so:
//{ launch(flight_number: 2) {misson_name, ... }}
//=> if you don't choose any fields, you get all of them (at least in the graphiql tool)
