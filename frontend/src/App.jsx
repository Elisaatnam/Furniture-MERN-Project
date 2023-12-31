import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { refreshContext, loadingContext } from "./context/Context";
import Home from "./pages/Home/Home";
import BigStuff from "./pages/BigStuff/BigStuff";
import NotSoBigStuff from "./pages/NotSoBigStuff/NotSoBigStuff";
import SmallStuff from "./pages/SmallStuff/SmallStuff";
import Details from "./pages/Details/Details";
import "../../frontend/src/assets/fonts/Tektur/Tektur-VariableFont_wdth,wght.ttf";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <loadingContext.Provider value={{ loading, setLoading }}>
        <refreshContext.Provider value={{ refresh, setRefresh }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bigstuff" element={<BigStuff />} />
              <Route path="/notsobigstuff" element={<NotSoBigStuff />} />
              <Route path="/smallstuff" element={<SmallStuff />} />
              <Route path="/:category/:id" element={<Details />} />
            </Routes>
          </BrowserRouter>
        </refreshContext.Provider>
      </loadingContext.Provider>
    </>
  );
}

export default App;
