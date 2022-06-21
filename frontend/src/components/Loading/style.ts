import styled from 'styled-components';
export const Container = styled.div`
  max-width: 100%;
  background: ${({ theme }) => theme.colors.backgroundContr};
  margin: 0 auto;
  border-radius: 6px;
  height: 100vh;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10000;

  img {
    margin-top: 32px;
  }
  /* CELULAR */
  @media (max-width: 480px) {
    div {
      width: 150px !important;
    }

    h3 {
      font-size: 16px;
      top: -40%;
    }
  }
`;
