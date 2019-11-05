import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const Item = ({ match }) => {
  const { data: item, loading } = useQuery(GET_ITEM_QUERY, {
    variables: { id: match.params.id }
  });
  console.log(item);
  if (loading) {
    return <div>Please wait while loading...</div>;
  }
  return <div>{item && <div>{item.name}</div>}Hello</div>;
};

const GET_ITEM_QUERY = gql`
  query GETITEM($id: ID!) {
    item(id: $id) {
      created_at
      description
      id
      image {
        url
      }
      name
      price
    }
  }
`;
export default Item;
