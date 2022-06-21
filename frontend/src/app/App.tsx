import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../assets/styles/global'
import { theme } from '../assets/styles/theme/default'
import { UserContextContainer } from '../context/UserContext';
import ProtectedRoutes from '../helper/ProtectedRoutes';
import CreateAccount from '../pages/CreateAccount';
import Login from '../pages/Login';
import NotFound from '../pages/Notfound/NotFound';
import User from '../pages/User/User';

function App() {
  return (
    <BrowserRouter>
      <UserContextContainer>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/create' element={<CreateAccount />} />
            <Route path='/user/*' element={<ProtectedRoutes><User /></ProtectedRoutes>} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            theme="colored"
          />
        </ThemeProvider>
      </UserContextContainer>
    </BrowserRouter>
  );
}

export default App;
