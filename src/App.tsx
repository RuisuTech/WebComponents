import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Documentation from "./pages/Documentation";
import Components from "./pages/Components";
import Header from "./Components/Header";
import DetailComponent from "./Components/DetailComponent";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Documentation" element={<Documentation />} />
          <Route path="/Components" element={<Components />} />
          <Route path="/Components/:id" element={<DetailComponent />} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
