import styled, { keyframes } from 'styled-components';

const load = keyframes`
  0% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
`;

const round = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const Img = styled.div`
  img {
    width: 90%;
    height: 100%;
    max-width: 500px;
    border-radius: 6px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 780px) {
    width: 70%;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const LoginContainer = styled.div`
  padding: 15px;
  border-radius: 8px;
  /* box-shadow: 4px 4px 14px 4px rgba(0, 0, 0, 0.3); */
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    width: 95%;
  }
  img {
    position: relative;
    top: -50px;
  }
  @media (max-width: 780px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  button {
    margin: 0 auto;
    width: 95%;
    margin-top: 12px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 100%;
      &.loader {
        color: ${({ theme }) => theme.colors.textPrimary};
        font-size: 19px;
        text-indent: -9em;
        overflow: hidden;
        width: 19px;
        height: 19px;
        border-radius: 50%;
        position: relative;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation: ${load} 1s infinite ease, ${round} 1s infinite ease;
        animation: ${load} 1s infinite ease, ${round} 1s infinite ease;
      }
    }
  }

  label {
    font-size: 18px;
    flex-direction: column;
    display: flex;
    width: 100%;

    color: ${({ theme }) => theme.colors.textPrimary};
    p {
      position: relative;
      left: 15px;
      margin-bottom: 6px;
    }
  }
`;

export const CreateAccount = styled.div`
  margin-top: 32px;
  color: ${({ theme }) => theme.colors.textPrimary};
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.orangeColorContraste};
  }
`;
