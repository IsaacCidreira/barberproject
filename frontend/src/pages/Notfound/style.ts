import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  img {
    display: flex;
    justify-content: end;
    align-items: flex-end;
    width: 150px;
  }

  div {
    display: flex;
    justify-content: baseline;
    height: 200px !important;
  }

  h3 {
    color: #fd0f04;
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
    width: 250px;
    height: 50px;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    border-radius: 8px;
    background-color: #fd0f04;
    display: flex;
    align-content: center;
    justify-content: center;
    box-shadow: 8px 8px 14px rgba(0, 0, 0, 0.6);
    a {
      text-decoration: none;
      font-weight: bold;
      color: #fff;
      font-size: 18px;
    }

    &:hover {
      background-color: #f33119;
    }
  }
`;
