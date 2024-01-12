import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout/Layout";
import Home from './pages/Home/Home'
import Subsystem from "./pages/Subsystem/Subsystem";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="subsystem" element={<Subsystem/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
