import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFound } from '../../components'
import { Dashboard, Login, Voter } from '../../pages'
import paths from './paths'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/${paths.dashboard}`} element={<Dashboard />} />
        <Route path={`/${paths.login}`} element={<Login />} />
        <Route path={`/${paths.voter}`} element={<Voter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export { Router }
