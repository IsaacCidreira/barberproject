
import Lottie from 'react-lottie'
import { Link } from 'react-router-dom'
import Ampulheta from '../../assets/images/notfound.json'
import { ButtonContainerCancel, Container } from './style'

const NotFound = () => {
  const options = {
    renderer: 'svg',

    loop: true,
    autoplay: true,
    animationData: Ampulheta,
  }
  return (
    <Container>
      <Lottie options={options} width={250} speed={2} isClickToPauseDisabled />
      <h3>OPS! Página não encontrada</h3>
      <ButtonContainerCancel>
        <button><Link to='/user/agendamento'>Voltar ao inicio</Link></button>
      </ButtonContainerCancel>
    </Container>
  )
}

export default NotFound