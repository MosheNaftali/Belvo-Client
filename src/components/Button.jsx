import styled from "styled-components"
import { Spin } from 'antd';

export default function Button(props) {
  return (<>
    {props.loading ?
      <div className='loading'>
        <Spin tip="Cargando..." size='large' />
      </div>
      :
      <ContainerButton {...props} />
    }
  </>
  )
}

const ContainerButton = styled.button`
  background-color: #3580e0;
  border-color: transparent;
  border-radius: 10px;
  padding: 10px;
  a{
    color: white;
    font-weight: bold;
  }
  /* text-transform: uppercase; */
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s;
  &:hover{
    opacity: 0.8;
  }
`