import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AnalysisPage from "./pages/AnalysisPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/analysis" element={<AnalysisPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
