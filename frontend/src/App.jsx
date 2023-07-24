import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import BigStuff from "./pages/BigStuff/BigStuff";
import NotSoBigStuff from "./pages/NotSoBigStuff/NotSoBigStuff";
import SmallStuff from "./pages/SmallStuff/SmallStuff";
import { useState } from "react";
import { refreshContext } from "./context/Context";

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <>
      <refreshContext.Provider value={{ refresh, setRefresh }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bigstuff" element={<BigStuff />} />
            <Route path="/notsobigstuff" element={<NotSoBigStuff />} />
            <Route path="/smallstuff" element={<SmallStuff />} />
          </Routes>
        </BrowserRouter>
      </refreshContext.Provider>
    </>
  );
}

export default App;
