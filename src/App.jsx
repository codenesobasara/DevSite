import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import ContactDrawer from './components/ContactDrawer'
import ChatWidget from './components/ui/Chatwidget'

const Home = lazy(() => import('./pages/Home'))
const CaseStudies = lazy(() => import('./Pages/CaseStudies'))
const CaseStudyFocusPoint = lazy(() => import('./Pages/CaseStudyFocusPoint'))
const CaseStudyBasara = lazy(() => import('./Pages/CaseStudyBasara'))
const CaseStudyMedLeads = lazy(() => import('./Pages/CaseStudyMedLeads'))
const CaseStudyTranscribatron = lazy(() => import('./Pages/CaseStudyTranscribatron'))
const Services = lazy(() => import('./Pages/Services'))
const ServiceDetail = lazy(() => import('./Pages/ServiceDetail'))
const Contact = lazy(() => import('./Pages/Contact'))

function App() {
  return (
        <>
    <ContactDrawer />
    <Suspense fallback={null}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-study" element={<CaseStudies />} />
      <Route path="/case-study/focuspoint" element={<CaseStudyFocusPoint />} />
      <Route path="/case-study/basara" element={<CaseStudyBasara />} />
      <Route path="/case-study/medleads" element={<CaseStudyMedLeads />} />
      <Route path="/case-study/transcribatron" element={<CaseStudyTranscribatron />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </Suspense>
    <ChatWidget />
      </>
  )
}

export default App
