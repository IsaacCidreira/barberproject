import React, { useState } from 'react'
import Cleiton from '../../assets/images/cleiton.jpg'
import Estela from '../../assets/images/estela.jpg'
import Fernando from '../../assets/images/fernando.jpg'
import Patricia from '../../assets/images/patricia.jpg'
import Button from '../Button/Button'
import { ModalConfirm } from '../ModalConfirm/ModalConfirm'
import { CardFuncionario, Container, ServiceCard } from './style'

const Funcionarios = ({ data }: any) => {
  const [funcionario, setFuncionario] = useState<string>('')
  const [modal, setModal] = useState<boolean>(false);

  const valid = funcionario && data
  function handleChangeService({ target }: React.ChangeEvent<HTMLInputElement>) {
    setFuncionario(target.value)
  }
  return (
    <Container>
      <CardFuncionario>
        <ModalConfirm setModal={setModal} modal={modal} funcionario={funcionario} data={data} />
        <h1>Escolha um profissional</h1>
        <form>
          <div className='card'>
            {funcionario === 'cleiton' ? (<label className="active" >
              <img src={Cleiton} alt="" />
              <p><strong>Nome: </strong>Cleiton</p>
              <p><strong>Especialidade: </strong>Barba</p>
              <p><strong>Idade: </strong>32</p>
              <input
                type="radio"
                value='cleiton'
                checked={funcionario === 'cleiton'}
                onChange={handleChangeService}
              />
            </label>) : (<label >
              <img src={Cleiton} alt="" />
              <p><strong>Nome: </strong> Cleiton</p>
              <p><strong>Especialidade: </strong>Barba</p>
              <p><strong>Idade: </strong>32</p>
              <input
                type="radio"
                value='cleiton'
                checked={funcionario === 'cleiton'}
                onChange={handleChangeService}
              />
            </label>)}
          </div>

          <div className='card'>
            {funcionario === 'estela' ? (<label className="active" >
              <img src={Estela} alt="" />
              <p><strong>Nome: </strong>Estela</p>
              <p><strong>Especialidade: </strong>Cabelo</p>
              <p><strong>Idade: </strong>22</p>
              <input
                type="radio"
                value='estela'
                checked={funcionario === 'estela'}
                onChange={handleChangeService}
              />
            </label>) : (<label >
              <img src={Estela} alt="" />
              <p><strong>Nome: </strong>Estela</p>
              <p><strong>Especialidade: </strong>Cabelo</p>
              <p><strong>Idade: </strong>22</p>
              <input
                type="radio"
                value='estela'
                checked={funcionario === 'estela'}
                onChange={handleChangeService}
              />
            </label>)}
          </div>

          <div className='card'>
            {funcionario === 'patricia' ? (<label className="active" >
              <img src={Patricia} alt="" />
              <p><strong>Nome: </strong>Patricia</p>
              <p><strong>Especialidade: </strong>Progressiva</p>
              <p><strong>Idade: </strong>27</p>
              <input
                type="radio"
                value='patricia'
                checked={funcionario === 'patricia'}
                onChange={handleChangeService}
              />
            </label>) : (<label >
              <img src={Patricia} alt="" />
              <p><strong>Nome: </strong>Patricia</p>
              <p><strong>Especialidade: </strong>Progressiva</p>
              <p><strong>Idade: </strong>27</p>
              <input
                type="radio"
                value='patricia'
                checked={funcionario === 'patricia'}
                onChange={handleChangeService}
              />
            </label>)}
          </div>
          <div className='card'>
            {funcionario === 'Fernando' ? (<label className="active" >
              <img src={Fernando} alt="" />
              <p><strong>Nome: </strong>Fernando</p>
              <p><strong>Especialidade: </strong>Luzes</p>
              <p><strong>Idade: </strong>37</p>
              <input
                type="radio"
                value='Fernando'
                checked={funcionario === 'Fernando'}
                onChange={handleChangeService}
              />
            </label>) : (<label >
              <img src={Fernando} alt="" />
              <p><strong>Nome: </strong>Fernando</p>
              <p><strong>Especialidade: </strong>Luzes</p>
              <p><strong>Idade: </strong>37</p>
              <input
                type="radio"
                value='Fernando'
                checked={funcionario === 'Fernando'}
                onChange={handleChangeService}
              />
            </label>)}
          </div>
        </form>
      </CardFuncionario>
      <ServiceCard>
        <Button onClick={() => setModal(true)} disabled={!valid}>AGENDAR</Button>
      </ServiceCard>
    </Container>
  )
}

export default Funcionarios