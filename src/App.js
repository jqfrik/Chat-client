import React from "react";
import "./App.css";
import Header from "./Components/Header";
import MainPage from "./Pages/MainPage";
import LoginPage from "./Pages/LoginPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import base64 from "base64-js"

function App() {
  const [currentUser, setCurrentUser] = React.useState(null)
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)

  React.useEffect(() => {
    const token = localStorage.getItem("authToken")
    if (token !== "" && token !== null) {
      setIsAuthenticated(true)
    }
  });
  window.allonah = base64
  
  return (
    <div className="app">
      <Header />
      <Router>
        <Routes>
          <Route path="" element={ isAuthenticated ? <MainPage isAuthenticated={isAuthenticated} /> : <Navigate replace to="/login" /> } />
          <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
