import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/index'
import { Shopcart } from './pages/Shopcart/index'
import { Success } from './pages/Success/index'
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
