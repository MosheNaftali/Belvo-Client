// import { Tooltip } from "antd"
// import { UserContext } from "context/userContext"
// import useIcons from "hooks/useIcons"
// import { useContext, useEffect, useState } from "react"
// import { Link } from "react-router-dom"
// import styled from "styled-components"
// import Button from "./Button"

// export default function HeaderComponent() {
//   const Icon = useIcons("UserOutlined")
//   const userData = useContext(UserContext).user;
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   useEffect(() => {
//     setIsLoggedIn(Boolean(Object.keys(userData).length))
//   }, [userData])

//   return (
//     <ContainerHeaderComponent>
//       <div className="cont_logo">
//         <Link to="/">
//           <p>MERCADO<span className="primary">AZUL</span></p>
//         </Link>
//       </div>
//       <div className="cont_user">
//         <menu className="cont_menu">
//           <li><Link to="metricas">Métricas</Link></li>
//         </menu>
//         {isLoggedIn ?
//           <Tooltip placement="bottom" title="Mi cuenta">
//             <button className="my_account"><Link to="/my-account"><Icon /></Link></button>
//           </Tooltip>
//           : <Button><Link to="/login">Iniciar sesión</Link></Button>
//         }
//       </div>
//     </ContainerHeaderComponent>
//   )
// }

// const ContainerHeaderComponent = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 30px;
//   background: #fff;
//   position: fixed;
//   width: 100%;
//   height: 100px;
//   top: 0;
//   z-index: 100;
//   .cont_logo{
//     font-weight: bold;
//     font-size: 24px;
//     cursor: pointer;
//   }
//   .cont_user{
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     .cont_menu{
//         margin-right: 30px;
//         list-style: none;
//       padding: 0;
//       a{
//         background: none;
//         border: none;
//         color: #707a83;
//         font-weight: bold;
//         font-size: 20px;
//         &:hover{
//           color: #000;
//         }
//       }
//     }
//     button.my_account{
//       background: none;
//       border: 2px solid #707a83;
//       border-radius: 50px;
//       height: 40px;
//       width: 40px;
//       transition: 0.2s;
//       span{
//         font-size: 30px;
//         color: #707a83;
//         transition: 0.2s;
//       }
//       &:hover{
//         border-color: black;
//         span{
//           color: black;
//         }
//       }
//     }
//   }
//   @media(max-width: 769px){
//     display: flex;
//     flex-direction: column;
//     height: 150px;
//     .cont_user{
//       margin-top: 10px;
//     }
//   }
// `