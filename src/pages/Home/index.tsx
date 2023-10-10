import { HomeAdvantages, HomeContainer, HomeInfo, HomeSection } from './styles'
import coffeeDelivery from '../../assets/coffee-delivery.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <HomeSection>
        <HomeInfo>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
          <HomeAdvantages>
            <div>
              <ShoppingCart weight="fill" size={16} />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <Package weight="fill" size={16} />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <Timer weight="fill" size={16} />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <Coffee weight="fill" size={16} />
              <span>O café chega fresquinho até você</span>
            </div>
          </HomeAdvantages>
        </HomeInfo>
        <img src={coffeeDelivery} alt="" />
      </HomeSection>
    </HomeContainer>
  )
}
