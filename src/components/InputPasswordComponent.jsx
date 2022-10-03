import { Input } from 'antd';
import { LockOutlined } from '@ant-design/icons'
import styled from "styled-components"

export default function InputPasswordComponent({ type, value, onChange, name, label, placeholder }) {
  return (
    <ContInputPasswordComponent>
      {/* <p className="label">{label}</p> */}
      <Input.Password
        placeholder={placeholder}
        onChange={e => onChange(name, e.target.value)}
        prefix={<LockOutlined className="site-form-item-icon" />}
        value={value}
      />
    </ContInputPasswordComponent>
  )

}

const ContInputPasswordComponent = styled.div`
  margin-bottom: 10px;
  input{
    background: none;
    border: none;
    outline: none;
  }
`