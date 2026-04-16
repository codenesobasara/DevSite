import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CaseStudies from './Pages/CaseStudies'
import Services from './Pages/Services'
import ContactDrawer from './components/ContactDrawer'
import ChatWidget from './components/ui/Chatwidget'

function App() {
  return (
        <>
    <ContactDrawer />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-study" element={<CaseStudies />} />
      <Route path="/services" element={<Services />} />
      
    </Routes>
    <ChatWidget />
      </>
  )
}

export default App