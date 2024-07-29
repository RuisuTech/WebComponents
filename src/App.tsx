import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Documentation from "./pages/Documentation";
import Components from "./pages/Components";
import Header from "./Components/Header";
import DetailComponent from "./Components/DetailComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Documentation" element={<Documentation />} />
          <Route path="/Components" element={<Components />} />
          <Route path="/Components/1" element={<DetailComponent titulo={"Componente 1"}/>}/>
          <Route path="/Components/2" element={<DetailComponent titulo={"Componente 2"}/>}/>
          <Route path="/Components/3" element={<DetailComponent titulo={"Componente 3"}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
