import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

function App() {
  return (
    <div className="App">
      {/* /add /edit/:id */}
      <ToastContainer />
      <Navbar />
      <Route exact path="/" component={() => <Home />} />
      <Route path="/add" component={() => <AddContact />} />
      <Route path="/edit/:id" component={() => <EditContact />} />
    </div>
  );
}

export default App;
