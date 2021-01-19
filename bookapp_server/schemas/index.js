const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
} = graphql;

// create the type for book
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        //code to lookup author based on authorID in the books database collection
        //honetsly don't think this part is necessary...play with it.
      },
    },
  }),
});

//create the type for author
const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        //code to get list of books by author id (search in books collection)
      },
    },
  }),
});

//create the rootquery
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    //query for a book by passing a book id as an arg, like this: { book (id: x) { name, genre } }
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //code to lookup book by id in the books db collection
      },
    },
    //query for an author by passing author id as an arg
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //code to lookup author by id in the authors db collection
      },
    },
    //query for a list of books
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        //return list of all books
      },
    },
    //query for a list of authors
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        //return list of all authors
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
