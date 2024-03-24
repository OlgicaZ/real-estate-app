import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="*" element={ <NoPage /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
