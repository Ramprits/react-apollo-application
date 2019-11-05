import gql from "graphql-tag";
export const POSTS_QUERY = gql`
  query GetPosts {
    posts {
      id
      title
      body
      createdAt
      user {
        id
        email
      }
    }
  }
`;
