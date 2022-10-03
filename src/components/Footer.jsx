import styled from "styled-components"

export default function Footer() {
  return (
    <ContainerFooter>
      <p className="logo">MERCADO<span className="primary">AZUL</span></p>
      <a href="https://moshenaftali.github.io/portafolio/" target="_blank" rel="noopener noreferrer"><p>Desarrollado por: Moshe Shabes</p></a>
    </ContainerFooter>
  )
}

const ContainerFooter = styled.footer`
  background-color: #1f2b38;    
  width: 100%;
  min-height: 10vh;
  text-align: center;
  padding-top: 15px;
  p{
    color: white;
    margin-bottom: 0;
    &.logo{
      font-weight: bold;
      font-size: 24px;
    }
  }
  a{
    text-decoration: underline;
    text-decoration-color: white;
  }
`