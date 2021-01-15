const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString } = graphql;

// create the type for book
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString },
    genre: { type: graphql.GraphQLString },
  }),
});

//create the type for author

//create the rootquery
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //code
      },
    },
  },
});
