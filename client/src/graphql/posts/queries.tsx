import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query {
    posts {
      _id
      title
      body
      createdAt
    }
  }
`;
