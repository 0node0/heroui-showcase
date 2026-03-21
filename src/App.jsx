import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { HeroUIProvider } from '@heroui/react'
import { TablerProvider } from '@tabler/icons-react'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import FormsPage from './pages/FormsPage'
import ComponentsPage from './pages/ComponentsPage'

function App() {
  return (
    <HeroUIProvider>
      <TablerProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/forms" element={<FormsPage />} />
            <Route path="/components" element={<ComponentsPage />} />
          </Routes>
        </BrowserRouter>
      </TablerProvider>
    </HeroUIProvider>
  )
}

function Navigation() {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">
          ✨ AI Creative Studio
        </Link>
        <div className="flex gap-4">
          <Link to="/" className="text-white hover:text-purple-200 transition">Home</Link>
          <Link to="/dashboard" className="text-white hover:text-purple-200 transition">Dashboard</Link>
          <Link to="/forms" className="text-white hover:text-purple-200 transition">Forms</Link>
          <Link to="/components" className="text-white hover:text-purple-200 transition">Components</Link>
        </div>
      </div>
    </nav>
  )
}

export default App
