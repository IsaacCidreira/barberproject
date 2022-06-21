import Lottie from 'react-lottie'
import { Container } from './style'
import logo from '../../assets/images/logo.png'
import Ampulheta from '../../assets/images/ampulheta.json'

const Loading = () => {
  const options = {
    renderer: 'svg',

    loop: true,
    autoplay: true,
    animationData: Ampulheta,
  }
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Lottie options={options} width={150} speed={2} isClickToPauseDisabled />

    </Container>
  )
}

export default Loading