import { Input } from 'antd';
import styled from "styled-components"
import useIcons from '../hooks/useIcons';

export default function InputComponent({ type, value, onChange, name, label, placeholder }) {
  const Icon = useIcons("MailOutlined")
  return (
    <ContInputComponent>
      {/* <p className="label">{label}</p> */}
      <Input
        placeholder={placeholder}
        prefix={<Icon className="site-form-item-icon" />}
        type={type}
        onChange={e => onChange(name, e.target.value)}
      />
    </ContInputComponent>
  )

}

const ContInputComponent = styled.div`
  margin-bottom: 10px;
  input{
    background: none;
    border: none;
    outline: none;
  }
`