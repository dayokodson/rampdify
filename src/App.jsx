import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dapp from "./pages/Dapp";
import Home from "./pages/Home"; 
import Buy from "./pages/Buy";
import Rusd from "./pages/Rusd";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/buy" element={<Buy />}></Route>
        <Route path="/buy-rusd" element={<Rusd />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
