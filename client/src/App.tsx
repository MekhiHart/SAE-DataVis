import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout/Layout";
import Home from './pages/Home/Home'
import Subsystem from "./pages/Subsystem/Subsystem";
import Analysis from "./pages/Analysis/Analysis";
import NoPage from "./pages/NoPage/NoPage";
import Upload from "./pages/Upload/Upload"



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="subsystem" element={<Subsystem/>}/>
          <Route path="analysis" element={<Analysis/>}/>
          <Route path="upload" element={<Upload/>}/>
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
