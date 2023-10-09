import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Shopcart } from './pages/Shopcart'
import { Success } from './pages/Success'
import { DefaultLayout } from './layouts/DefaultLayout/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shopcart" element={<Shopcart />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
