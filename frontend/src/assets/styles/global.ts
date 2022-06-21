import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lora", Arial, Helvetica, sans-serif;
}

body{
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

button{
  cursor: pointer;
  border: none;
}
}

`;
