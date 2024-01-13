import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout/Layout";
import Home from './pages/Home/Home'
import Subsystem from "./pages/Subsystem/Subsystem";
import Graph from "./pages/Graph/Graph";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="subsystem" element={<Subsystem/>}/>
          <Route path="graph" element={<Graph/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
