import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { BrowserRouter } from "react-router-dom";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
// import Login from "./Login/Login";
const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
