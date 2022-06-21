import { Container, CreateAccount, Form, Img, LoginContainer } from './style'
import barber from '../../assets/images/barber1.jpg'
import Head from '../../helper/Head'
import FormGroup from '../../components/FormGroup/FormGroup'
import Input from '../../components/Input/Input'
import { FormEvent, useContext, useState } from 'react'
import Button from '../../components/Button/Button'
import logo from '../../assets/images/logo.png'
import useErrors from '../../hooks/useErrors'
import { UserContext } from '../../context/UserContext'
import { Link } from 'react-router-dom'
const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const { userAuth, isLoading } = useContext(UserContext)

  const { setErros, removeErrors, getErrorMessageByFieldName, errors } = useErrors()

  const isValid = errors.length === 0 && userName && password

  function handleUserNameChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setUserName(target.value)
    if (!target.value) {
      setErros({ field: 'username', message: 'Insira um username' })
    } else {
      removeErrors('username')
    }
  }

  function handlePasswordChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setPassword(target.value)

    if (!target.value) {
      setErros({ field: 'senha', message: 'Insira uma senha' })
    } else {
      removeErrors('senha')
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await userAuth(userName, password)
  }

  return (
    <Container>
      <Head title='Login' description='login da barbearia' />
      <LoginContainer>
        <img src={logo} alt="" />
        <Form onSubmit={handleSubmit}>
          <FormGroup error={getErrorMessageByFieldName('username')}>
            <Input type='text' value={userName} onChange={handleUserNameChange} name="userName" placeholder='Username' />
          </FormGroup>
          <FormGroup error={getErrorMessageByFieldName('senha')}>
            <Input type='password' value={password} onChange={handlePasswordChange} name="password" placeholder='Senha' />
          </FormGroup>
          {isLoading ? <Button className={'carregando'} disabled={true}> <div className='loader'></div></Button> : <Button disabled={!isValid as boolean}>Entrar</Button>}
        </Form>
        <CreateAccount>
          <p>Não possui conta ? <Link to='/create'>Crie sua conta</Link></p>
        </CreateAccount>
      </LoginContainer>
      <Img>
        <img src={barber} alt="foto de equipamentos de barbearia" />
      </Img>
    </Container>
  )
}

export default Login