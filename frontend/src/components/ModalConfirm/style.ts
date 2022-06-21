import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  width: 95%;
  max-width: 400px;
  background: ${({ theme }) => theme.colors.backgroundContr};
  border-radius: 6px;
  padding: 10px 20px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 30px;

    div {
      width: 90%;
      display: flex;
      justify-content: center;
    }
  }
  div {
    position: relative;
    h1 {
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }
`;

export const Close = styled.footer`
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    background-color: transparent;
    border: none;
    position: absolute;
    top: -29px;
    right: -15px;
  }
  .cancel-button {
    background: transparent;
    border: none;
    font-size: 16px;
    margin-right: 8px;
  }
`;

export const BodyModal = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .infos {
    p {
      margin-bottom: 12px;
      text-transform: capitalize;
    }
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 12 px;
  button {
    margin-top: 22px;
    width: 90%;
    display: flex;
    align-content: center;
    justify-content: center;
  }
`;

export const ButtonContainerConfirm = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  button {
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
    border-radius: 8px;
    background-color: #4d9d3e;
    display: flex;
    align-content: center;
    justify-content: center;

    &:hover {
      background-color: #8cdb78;
    }
  }
`;
export const ButtonContainerCancel = styled.div`
  padding-bottom: 20px;
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-top: 12px;
  button {
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
    border-radius: 8px;
    background-color: #fd0f04;
    display: flex;
    align-content: center;
    justify-content: center;

    &:hover {
      background-color: #f33119;
    }
  }
`;
