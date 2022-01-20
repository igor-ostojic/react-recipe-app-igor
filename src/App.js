import { BrowserRouter, Routes, Route } from "react-router-dom";

//page components
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";

import Navbar from "./components/Navbar";

//styles
import "./App.css";
import MobileNav from "./components/MobileNav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <MobileNav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/search" element={<Search />} />
            <Route path="/recipes/:id" element={<Recipe />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
