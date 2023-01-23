import logo from "./logo.svg";
import "./App.css";
import { PageLayout } from "./components/Navbar/PageLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PageLayout />} />
          <Route path="/path" element={<OtherFile />} />
          <Route path="*" element={<NotFoundpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
