import { HeaderCointainer } from './styles'
import logoCoffee from '../../assets/logo-coffee.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderCointainer>
      <img src={logoCoffee} alt="" />
      <nav>
        <NavLink to="" title="localização">
          <MapPin weight="fill" size={22} />
          &nbsp; Belo Horizonte, MG
        </NavLink>
        <NavLink to="/shopcart" title="Carrinho de compras">
          <ShoppingCart weight="fill" size={22} />
        </NavLink>
      </nav>
    </HeaderCointainer>
  )
}
