import logo from "./logo.svg";
import "./App.css";
import { City } from "./components/City";
import { ZipCountry } from "./components/ZipCountry";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageLayout } from "./components/PageLayout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route path="/city" element={<City />} />
            <Route path="/country" element={<ZipCountry />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
