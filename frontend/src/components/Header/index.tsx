import { Container, Logo, PerfilImg } from './style'
import logo from '../../assets/images/logo.png'
import avatar from '../../assets/images/avatar.png'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { ReactComponent as Mensagem } from '../../assets/images/mensagem.svg'
import { ReactComponent as Alert } from '../../assets/images/alert.svg'
const Header = () => {
  const { userLogout } = useContext(UserContext)
  const [dropdown, setDropdown] = useState(false)
  const ref = useRef<any>(null)
  const dropref = useRef<any>(null)

  useEffect(() => {
    const closeDropDown = (e: any) => {
      if (!e.path.includes(ref.current) && !e.path.includes(dropref.current)) {
        setTimeout(() => {
          setDropdown(false)

        });
      }
    }

    document.documentElement.addEventListener('click', closeDropDown)
    return () => document.documentElement.removeEventListener('click', closeDropDown)
  }, [])

  return (
    <Container >
      <Logo >
        <Link to='/user/agendamento'>
          <img src={logo} alt="logo hair" />
        </Link>
      </Logo>
      <PerfilImg >
        <div ref={ref} className='image--container' onClick={() => setDropdown(!dropdown)}>
          <Mensagem />
          <Alert />
          <img src={avatar} alt="" />
        </div>
        <ul ref={dropref} className={dropdown ? 'dropdown' : 'dropdown-off'} >
          <li>Mensagem</li>
          <li>Pefil</li>
          <li>Agendamento</li>
          <li onClick={() => userLogout()}>Sair</li>
        </ul>
      </PerfilImg>
    </Container>
  )
}

export default Header
