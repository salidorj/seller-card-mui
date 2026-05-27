import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/pages/firstPage/home";
import { PosterItem } from "./Components/pages/thirdPage/posteritem";
import { PublishPage } from "./Components/pages/secondPage/PublishPage";
import { StickyFooter } from "./Components/error404/error";


function App() {
  return (
    <BrowserRouter basename="/seller-card-mui">
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/poster" Component={PublishPage} />
        <Route path="/poster/:id" Component={PosterItem} />
        <Route path="*" Component={StickyFooter} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
