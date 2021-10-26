import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import View from "./components/pages/View";
import Create from "./components/pages/Create";
import Edit from "./components/pages/Edit";
import "./App.css";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={View} />
            <Route path="/create" component={Create} />
            <Route path="/edit/:id" component={Edit} />
          </Switch>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
