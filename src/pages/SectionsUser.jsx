import { post } from "api"
import Button from "components/Button";
import dayjs from "dayjs"
import { useSetState } from 'react-use';
import { Space, Table, Tag } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

const columns = {
  transactions: [
    {
      title: 'Descripción',
      dataIndex: 'description',
    },
    {
      title: 'Monto',
      dataIndex: 'amount',
    },
    {
      title: 'Fecha',
      dataIndex: 'accounting_date',
      render: (date) => <p>{dayjs(date).format('DD/MM/YYYY')}</p>
    },
  ],
  accounts: [
    {
      title: 'Nombre de cuenta',
      dataIndex: 'name',
    },
    {
      title: 'Número de cuenta',
      dataIndex: 'number',
    },
    {
      title: 'Balance',
      dataIndex: ['balance', 'current'],
    },
  ],
  balances: [
    {
      title: 'Nombre de cuenta',
      dataIndex: ['account', 'name'],
    },
    {
      title: 'Número de cuenta',
      dataIndex: ['account', 'number'],
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
    },
    {
      title: 'Fecha',
      dataIndex: 'value_date',
      render: (date) => <p>{dayjs(date).format('DD/MM/YYYY')}</p>
    },
  ],
};

export default function SectionsUser({ linkId: link_id }) {

  const [{ data, loading, table }, setState] = useSetState({
    data: [],
    table: "",
    loading: false
  });
  const retrieveAccounts = async () => {
    setState({ loading: true })
    post("/accounts", { link_id }).then(res => {
      setState({ data: res, loading: false, table: "accounts" })
    })
  }
  const retrieveTransactions = async () => {
    setState({ loading: true })
    post("/transactions", { link_id }).then(res => {
      setState({ data: res, loading: false, table: "transactions" })
    })
  }
  const retrieveBalances = async () => {
    setState({ loading: true })
    post("/balances", { link_id }).then(res => {
      setState({ data: res, loading: false, table: "balances" })
    })
  }
  console.log(loading)
  return (
    <div className="cont_sections_user">
      {loading ? <Spin indicator={antIcon} /> :
        <>
          <Button onClick={retrieveAccounts}>
            Cuentas
          </Button>
          <Button onClick={retrieveTransactions}>
            Transacciones
          </Button>
          <Button onClick={retrieveBalances}>
            Balance diario
          </Button>
          <div className="table">
            <Table dataSource={data} columns={columns[table]} />;
          </div>
        </>
      }
    </div>
  )
}