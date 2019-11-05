import React from "react";
import App from "./app";

import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

const http = new createHttpLink({
  uri: "https://strapi-latest.herokuapp.com/graphql"
});

const client = new ApolloClient({
  link: http,
  cache: new InMemoryCache()
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
