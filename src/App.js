import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from "./Components/Test";
import Chat from "./Components/Chat";
import { useState } from "react";
import Login from "./Components/Login";
import { useStateValue } from "./Components/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {/* That's it that's how to switch loign page and actual content */}
        {!user ? (
          <Login />
        ) : (
          // <> this is a fragment
          <>
            {/* Header */}
            <Header />
            <div className="app__body">
              {/* Sidebar */}
              <Sidebar />
              {/* Content  -> click on sidebar*/}
              <Routes>
                {/* room/ write something after */}
                <Route exact path="/room/:roomId" element={<Chat />} />
              </Routes>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
