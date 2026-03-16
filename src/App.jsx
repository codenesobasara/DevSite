import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CaseStudies from './Pages/CaseStudies'
import ContactDrawer from './components/ContactDrawer'

function App() {
  return (
        <>
    <ContactDrawer />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-study" element={<CaseStudies />} />
    </Routes>
      </>
  )
}

export default App