import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.backgroundContr};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.2);
  width: 100%;
`;

export const Logo = styled.div`
  img {
    max-width: 100%;
  }
`;

export const PerfilImg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    width: 25px;
    left: -30px;
    margin-left: 24px;
    margin-right: 24px;
    /* box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.6); */

    &:nth-child(2) {
      margin-right: 36px;
    }
  }
  .image--container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.6);

    img {
      width: 20px;
    }
  }
  .dropdown {
    position: absolute;
    padding: 8px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.orangeColorContraste};
    list-style: none;
    right: 15px;
    top: 42px;
    box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.6);
    li {
      margin-bottom: 6px;
      padding: 0px 12px;
      &:not(:last-child) {
        padding-bottom: 8px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      }
    }
  }
  .dropdown-off {
    display: none;
  }
`;
