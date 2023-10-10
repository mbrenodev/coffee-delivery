import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom'

import { Home } from './pages/Home'
import { Shopcart } from './pages/Shopcart'
import { Success } from './pages/Success'

import { Header } from './components/Header'

import { Container } from './components/Container'

export const Routes = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/Shopcart/success" element={<Success />} />
          <Route path="/Shopcart" element={<Shopcart />} />
          <Route path="/" element={<Home />} />
        </Switch>
      </Container>
    </Router>
  )
}
