import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import GetInTouch from './pages/GetInTouch'
import Projects from './pages/Projects'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Skills from './pages/Skills'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/getintouch" element={<GetInTouch />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
