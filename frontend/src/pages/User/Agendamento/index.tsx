import Head from '../../../helper/Head'
import { Container } from './style'
import 'react-calendar/dist/Calendar.css';
import Cleiton from '../../../assets/images/cleiton.jpg'
import Estela from '../../../assets/images/estela.jpg'
import Calendar from 'react-calendar'
import { useState } from 'react'
import Funcionarios from '../../../components/Funcionarios';
import Loading from '../../../components/Loading/Loading';

const Agendamento = () => {
  const [data, setData] = useState(new Date())
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 2000);

  const dataFormat = new Intl.DateTimeFormat(
    'pt-BR',
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(data)


  if (loading) return <Loading />
  return (
    <Container>
      <Head title='Agendamento' />
      <h1>Agendamento</h1>
      <hr />
      <Calendar value={data} onChange={setData} className="react-calendar" />
      <Funcionarios data={dataFormat} />
      <h1 className='title-ultimo--servicos'>Ultimos Serviços:</h1>
      <hr />
      <div className='subcontainer'>
        <div className='ultimos-servicos'>
          <div className='ultimos-servicos--card'>
            <img src={Cleiton} alt="" />
            <p><strong>Nome: </strong>Cleiton</p>
            <p> <strong>Serviço:</strong> Barba</p>
            <p><strong>Data:</strong> 21/06/2022</p>
            <p><strong>Valor:</strong> R$30,00</p>
          </div>
        </div>
        <div className='ultimos-servicos'>
          <div className='ultimos-servicos--card'>
            <img src={Estela} alt="" />
            <p><strong>Nome: </strong>Estela</p>
            <p> <strong>Serviço:</strong> Cabelo</p>
            <p><strong>Data:</strong> 10/02/2022</p>
            <p><strong>Valor:</strong> R$100,00</p>
          </div>
        </div>
        <div></div>
      </div>
    </Container>
  )
}

export default Agendamento