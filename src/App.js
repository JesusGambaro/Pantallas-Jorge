import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Login";
import Table from "./Table";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/VRs" element={<Table section="vr" />} />
        <Route path="/WEB360" element={<Table section="web360" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
