import { Route, Routes } from 'react-router-dom'
import Agendamento from './Agendamento'
import Header from '../../components/Header'

const User = () => {
  return (<>
    <Header />
    <Routes>
      <Route path='/agendamento' element={<Agendamento />} />
    </Routes>
  </>
  )
}

export default User