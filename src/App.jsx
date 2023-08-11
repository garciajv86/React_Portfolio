import { useState } from "react";
import "./App.css";
import Home from './pages/Home';

import NavBar from "./components/NavBar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <NavBar />
      <Header />
    </>
  );
}

export default App;
