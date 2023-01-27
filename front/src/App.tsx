import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import ProfileAccount from "./pages/ProfileAccount";


function App() {
  return (
    <div>
      <div className="mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createUser" element={<Register />} />
          <Route path="/profile/:id" element={<ProfileAccount />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
