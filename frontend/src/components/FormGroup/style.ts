import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  small {
    margin-top: 8px;
    width: 100%;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.errorColor};
    left: 15px;
    position: relative;
  }
`;
