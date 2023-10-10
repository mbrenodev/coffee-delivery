import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const HomeSection = styled.section`
  width: 100%;
  height: 34rem;
  display: flex;
  padding: 4rem;
  justify-content: space-around;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`

export const HomeInfo = styled.div`
  width: 36.75rem;

  & h1 {
    color: ${(props) => props.theme.base_title};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 3rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    margin-bottom: 1.2rem;
  }

  & span {
    color: ${(props) => props.theme.base_subtitle};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`

export const HomeAdvantages = styled.div`
  margin-top: 3.125rem;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  & div {
    width: 50%;
    display: flex;
    align-items: center;
    margin-top: 1rem;
    min-width: 290px;

    & span {
      color: ${(props) => props.theme.base_text};
      font-size: 1rem;
      margin-left: 0.75rem;
    }

    & svg {
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.yellow_dark};
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      padding: 0.5rem;
    }
  }
  & div:nth-child(2) svg {
    background-color: ${(props) => props.theme.base_text};
  }

  & div:nth-child(3) svg {
    background-color: ${(props) => props.theme.yellow};
  }

  & div:nth-child(4) svg {
    background-color: ${(props) => props.theme.purple};
  }
`

export const CoffeesSection = styled.section`
  width: 100%;

  & h3 {
    font-size: ${({ theme }) => theme.fonts.sizes.huge};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  & > div {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;

    & > div {
      margin: 2rem 0;
    }
  }
`
