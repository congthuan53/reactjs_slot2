import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import RouteInfo from './components/RouteInfo'
import Dashboard from './pages/Dashboard'
import DashboardHome from './pages/DashboardHome'
import DashboardNotes from './pages/DashboardNotes'
import DashboardTasks from './pages/DashboardTasks'
import CustomHookDemo from './pages/CustomHookDemo'
import Home from './pages/Home'
import HooksDemo from './pages/HooksDemo'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import OrchidDetail from './pages/OrchidDetail'
import OrchidList from './pages/OrchidList'
import UseRoutesDemo from './pages/UseRoutesDemo'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />

      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/orchids" element={<OrchidList />} />
          <Route path="/orchids/:id" element={<OrchidDetail />} />
          <Route path="/hooks" element={<HooksDemo />} />
          <Route path="/custom-hook" element={<CustomHookDemo />} />
          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="notes" element={<DashboardNotes />} />
            <Route path="tasks" element={<DashboardTasks />} />
          </Route>

          <Route path="/mini/*" element={<UseRoutesDemo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <RouteInfo />
    </div>
  )
}

export default App
