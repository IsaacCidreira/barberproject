import styled from 'styled-components';

export const Container = styled.button`
  border-radius: 6px;
  width: 100%;
  height: 50px;
  border: none;
  font-size: 18px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.orangeColorContraste};
  transition: background 0.5s ease 0s, color 0.5s ease 0s;

  &[disabled] {
    background-color: rgba(248, 129, 42, 0.31);
    color: rgba(255, 255, 255, 0.34);
    cursor: not-allowed;
    &:hover {
      background-color: rgba(248, 129, 42, 0.31);
    }
  }
  &:hover {
    color: ${({ theme }) => theme.colors.orangeColorContraste};
    background-color: ${({ theme }) => theme.colors.textPrimary};
  }

  /* CELULAR */
  @media (max-width: 480px) {
    height: 40px;
    font-size: 18px;
  }
`;
