import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import FormGroup from '../../components/FormGroup/FormGroup';
import Input from '../../components/Input/Input';
import useErrors from '../../hooks/useErrors';
import { ButtonContainer, Container, Form, HeaderNewContact } from './style';
import arrow from '../../assets/images/arrow.svg'
import CreateUserService from '../../services/createUser/CreateUserService';
import isEmailValid from '../../utils/isEmailValid';


const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassowrd] = useState('')

  const { setErros, removeErrors, getErrorMessageByFieldName, errors } = useErrors();
  const isFormValid = name && email && userName && password && errors.length === 0;
  let navigate = useNavigate();

  function HandleChangeEmail({
    target,
  }: React.ChangeEvent<HTMLInputElement>) {

    setEmail(target.value)
    if (!target.value || !isEmailValid(target.value)) {
      setErros({ field: 'email', message: 'Email é Obrigatório' });
    } else {
      removeErrors('email');
    }
  }

  function HandleChangeUserName({ target }: React.ChangeEvent<HTMLInputElement>) {
    setUserName(target.value);
    if (!target.value) {
      setErros({ field: 'username', message: 'Username é Obrigatório' });
    } else {
      removeErrors('username');
    }
  }

  function HandleChangeName({ target }: React.ChangeEvent<HTMLInputElement>) {
    setName(target.value);
    if (!target.value) {
      setErros({ field: 'name', message: 'Nome é Obrigatório' });
    } else {
      removeErrors('name');
    }
  }

  function HandleChangePassowrd({ target }: React.ChangeEvent<HTMLInputElement>) {
    setPassowrd(target.value);

    if (!target.value) {
      setErros({ field: 'password', message: 'Senha é Obrigatório' });
    } else {
      removeErrors('password');
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const response = await CreateUserService.createUser(name, email, userName, password);
      if (response.ok === false) throw new Error('Usuario ou senha incorreto.');
      toast.success('Conta criada com sucesso', {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      })
      navigate('/')
    } catch (error) {
      console.log(error);
      toast.error('Usuário ou e-mail em uso', {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      })
    }
  }
  return (
    <Container>
      <HeaderNewContact>
        <Link to="/">
          <img src={arrow} alt="Voltar" />
          <span>Voltar</span>
        </Link>
        <h1>Nova Conta</h1>
      </HeaderNewContact>
      <Form onSubmit={handleSubmit}>
        <FormGroup error={getErrorMessageByFieldName('name')}>
          <Input type='text' placeholder="Nome" value={name} onChange={HandleChangeName} />
        </FormGroup>
        <FormGroup error={getErrorMessageByFieldName('username')}>
          <Input
            type='text'
            placeholder="Username"
            value={userName}
            onChange={HandleChangeUserName}
          />
        </FormGroup>
        <FormGroup error={getErrorMessageByFieldName('email')}>
          <Input
            type='text'
            placeholder="Email"
            value={email}
            onChange={HandleChangeEmail}
          />
        </FormGroup>
        <FormGroup error={getErrorMessageByFieldName('password')}>
          <Input
            type='password'
            placeholder="Crie sua senha"
            value={password}
            onChange={HandleChangePassowrd}
          />
        </FormGroup>
        <ButtonContainer>
          <Button disabled={!isFormValid}>
            Criar nova conta
          </Button>
        </ButtonContainer>
      </Form>
    </Container >
  );
}

export default CreateAccount