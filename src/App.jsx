import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import RecipeDetail from './pages/RecipeDetail'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { Container } from '@mui/material'

function App() {
    return (
        <Router>
            <Navbar />
            <Container sx={{ minHeight: '80vh', py: 4 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/recetas" element={<Recipes />} />
                    <Route path="/recetas/:id" element={<RecipeDetail />} />
                    <Route path="/acerca" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    )
}

export default App