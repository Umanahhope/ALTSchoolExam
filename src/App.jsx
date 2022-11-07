import React from "react";
import Repos from "./component/Repos";
import ErrorBoundary from "./component/ErrorBoundary";
import { Routes, Route } from "react-router-dom";
import Repo from "./component/Repo";
import Layout  from "./component/Layout";
import Home  from "./component/Home";
import NotFound from "./component/NotFound";
import "./App.css";

const App = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/repos" element={<Repos />} />
          <Route path="/repos/:repoName" element={<Repo />} />
        </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
    </ErrorBoundary>
  )
}

export default App;