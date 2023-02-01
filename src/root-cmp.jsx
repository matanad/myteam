import { HomePage } from './pages/home-page';
import { AppHeader } from './cmps/app-header';
import { Routes, Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

export function RootCmp() {
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </Router>

  )
}

export default RootCmp