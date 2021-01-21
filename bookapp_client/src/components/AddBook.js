import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const AddBook = (props) => {
  const displayAuthors = () => {
    let data = props.data;
    if (data.loading) {
      return <option disabled>Loading Authors...</option>;
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };

  return (
    <div>
      <form>
        <label>Book name</label>
        <input type="text" />
        <label>Genre</label>
        <input type="text" />
        <label>Author</label>
        <select>
          <option>Select Author</option>
          {displayAuthors()}
        </select>
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default graphql(getAuthorsQuery)(AddBook);
