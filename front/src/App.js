import React from 'react';
import { StoreProvider } from "./store";
import ListView from "./list/list";
import FormView from "./list/form";

function App() {
  return <StoreProvider>
    <div className="title">
      <h3>Dashboard</h3>
    </div>
    <div className="container">
      <div className="content">
        <FormView />
        <ListView />
      </div>
    </div>
  </StoreProvider>
}

export default App;