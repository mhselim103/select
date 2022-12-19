import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path=":name" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
