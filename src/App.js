import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage/NoPage";
import Valuation from "./pages/Valuation/Valuation";
import Sell from "./pages/Sell/Sell";
import Buy from "./pages/Buy/Buy";
import Guide from "./pages/Guide/Guide";
import Blog from "./pages/Blog/Blog";
import Career from "./pages/Career/Career";
import About from "./pages/About/About";
import Events from "./pages/Events/Events";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/valuation" element={ <Valuation /> }/>
        <Route path="/sell" element={ <Sell/> }/>
        <Route path="/buy" element={ <Buy /> }/>
        <Route path="/guide" element={ <Guide /> }/>
        <Route path="/blog" element={ <Blog /> }/>
        <Route path="/career" element={ <Career /> }/>
        <Route path="/about" element={ <About /> }/>
        <Route path="/events" element={ <Events /> }/>
        <Route path="*" element={ <NoPage /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
