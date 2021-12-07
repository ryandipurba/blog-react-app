import Navbar from "./components/navbar/Navbar";
import Home from "./pages/homepage/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SinglePost from "./pages/single-post/SinglePost";
import Login from "./pages/login/Login";
import Write from "./pages/wirte/Write";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

function App() {
  const currentUser = true ;
  return (
    <div className="container">
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Home />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/register" element={currentUser ? <Home/> :<Register />} />
        <Route path="/login" element={currentUser ? <Home/> : <Login />} />
        <Route path="/write" element={currentUser ? <Write /> : <Login/>} />
        <Route path="/profile" element={currentUser ? <Profile/> : <Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
