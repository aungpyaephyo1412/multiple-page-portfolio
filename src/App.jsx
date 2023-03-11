import {Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Main from "./Components/Main.jsx";
import About from "./Components/About.jsx";
import Footer from "./Components/Footer.jsx";
import Error from "./Components/Error.jsx";
import Projects from "./Components/Projects.jsx";
import Contact from "./Components/Contact.jsx";


const App = () => {
    return (
        <div className=''>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}
export default App