import { gql } from "@apollo/client";

export const ALL_BOOKS = gql`
  query AllBooks {
    books: allBooks {
      id
      name
      year
      genre
      author
      createdAt
    }
  }
`;
export const ADD_BOOK = gql`
  mutation AddBook(
    $name: String!
    $year: String!
    $genre: String!
    $author: String!
    $createdAt: Date!
  ) {
    newBook: createBook(
      name: $name
      year: $year
      genre: $genre
      author: $author
      createdAt: $createdAt
    ) {
      id
      name
      year
      genre
      author
      createdAt
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateBook(
    $id: ID!
    $name: String!
    $year: String!
    $genre: String!
    $author: String!
  ) {
    updateBook(
      id: $id
      name: $name
      year: $year
      genre: $genre
      author: $author
    ) {
      id
      name
      year
      genre
      author
      createdAt
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation DeleteBook($id: ID!) {
    removeBook(id: $id) {
      id
    }
  }
`;
