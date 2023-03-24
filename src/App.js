import LoginForm from "./pages/LoginForm";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import List from "./pages/List";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
