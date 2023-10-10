import styled from 'styled-components'

export const HeaderCointainer = styled.header`
  display: flex;
  padding: 2rem 9rem;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme.background};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  nav {
    display: flex;
    gap: 0.75rem;

    a:first-child {
      width: 10rem;
      height: 2.375rem;
      cursor: default;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      background: ${(props) => props.theme.purple_light};
      color: ${(props) => props.theme.purple};
      border-radius: 5px;
      text-decoration: none;
      vertical-align: baseline;
    }

    a {
      width: 2.375rem;
      height: 2.375rem;
      font-size: 0.75rem;
      background: ${(props) => props.theme.yellow_light};
      color: ${(props) => props.theme.yellow_dark};
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`
