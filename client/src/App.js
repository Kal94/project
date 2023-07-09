import "./App.scss";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Auth from "./Pages/Auth.page";
import Register from "./Pages/Register.page";
import HomePage from "./Pages/home.page";
import { connect } from "react-redux";


function App({currentUser}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(App);
