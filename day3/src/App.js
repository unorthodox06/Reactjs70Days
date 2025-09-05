import About from "./components/About"
import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Student from "./components/Student"
import Contact from "./components/ContactUs"
import Error from "./components/Error"

const App = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/student" element={<Student/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact-us" element={<Contact/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
        </BrowserRouter>
    )
}

export default App