import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  user-select: none;
  width: 100%;
  align-items: center;
  justify-content: center;
  input {
    background-color: ${({ theme }) => theme.colors.backgroundForms};
    border: none;
    border-radius: 3px;
    height: 50px;
    padding: 12px;
    font-size: 18px;

    color: ${({ theme }) => theme.colors.textPrimary};
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.textFormsPlaceHolder};
      font-size: 18px;
    }

    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.orangeColorContraste};
    }
  }
`;
