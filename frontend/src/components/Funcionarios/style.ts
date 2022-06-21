import styled from 'styled-components';
export const Container = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 32px;

  h1 {
    color: ${({ theme }) => theme.colors.orangeColorContraste};
    margin-bottom: 0px;
    font-size: 22px;
    margin: 22px 0px;
    text-transform: uppercase;
  }

  label {
    cursor: pointer;
    padding: 10px 5px;
    text-align: center;
    margin-top: 12px;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.colors.backgroundContr};
    font-size: 18px;
    border-radius: 6px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    transition: 0.5s background;
    border: 1px solid transparent;
    flex-direction: column;
    img {
      margin-bottom: 12px;
    }
    p {
      margin-bottom: 12px;
    }
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.orangeColorContraste};
    }

    &.active {
      border: 1px solid ${({ theme }) => theme.colors.orangeColorContraste};
    }
  }
  input[type='radio'] {
    display: none;
  }

  /* CELULAR */
  @media (max-width: 500px) {
    label {
      font-size: 14px;
      flex-direction: row;

      img {
        margin-bottom: 0px;
      }
      p {
        margin-bottom: 0px;
      }
    }
  }
`;

export const CardFuncionario = styled.div`
  max-width: 750px;
  margin: 0 auto;
  color: #fff;
  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .card {
      display: flex;
      flex-direction: column;
      width: 49%;
    }
  }
  img {
    width: 60px;
    border-radius: 8px;
  }

  @media (max-width: 500px) {
    form {
      flex-direction: column;
      .card {
        flex-direction: row;
        width: 100%;
      }
    }
  }
`;
export const ServiceCard = styled.div`
  margin: 0 auto;
  margin-top: 42px;
  width: 250px;
  box-shadow: 8px 8px 14px rgba(0, 0, 0, 0.6);
  button {
    height: 60px;
    font-weight: bold;
    font-size: 22px;
  }
`;
