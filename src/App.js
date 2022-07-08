import { useEffect, useState } from "react";
import Movie from "./components/Movie";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <BrowserRouter basename="react-movie">
      <Route path="/" exact component={Home} />
      <Route path="/movie/:id" exact component={Detail} />
    </BrowserRouter>
  );
}

export default App;
