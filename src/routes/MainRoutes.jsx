
import { BrowserRouter as Router, 
         Routes, 
         Route 
        } from "react-router-dom"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Main from "../pages/Main"
import About from '../pages/About'
import Projects from '../pages/Projects'
import Uses from '../pages/Uses'
import Technology from '../pages/Technology'
import Error from "../components/Error"
import Work from "../pages/Work"
import Certification from "../pages/Certification"

const MainRoutes = () => {
  return (
    <div className="bg-[#000000]">
    <Router>

        <Navbar/>

            <Routes>

                <Route path="/" element={<Main/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/uses" element={<Uses/>}/>
                <Route path="/technology" element={<Technology/>}/>
                <Route path="/work" element={<Work/>}/>
                <Route path="/certification" element={<Certification/>} />
                <Route path="*" element={<Error/>} />


            </Routes>

        <Footer/>

    </Router>
    </div>
    )

}


export default MainRoutes