import { HeaderCointainer } from './styles'
import logoCoffee from '../../assets/logo-coffee.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderCointainer>
      <img src={logoCoffee} alt="" />
      <nav>
        <a href="">
          <MapPin weight="fill" size={22} />
          &nbsp; Belo Horizonte, MG
        </a>
        <a href="">
          <ShoppingCart weight="fill" size={22} />
        </a>
      </nav>
    </HeaderCointainer>
  )
}
