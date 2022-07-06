import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthService from "../services/loginUser/AuthService";
import GetUser from "../services/loginUser/GetUser";

export const UserContext = createContext<any>(null)



export const UserContextContainer = ({ children }: ReactNode | any) => {
  const [hasError, setHasError] = useState<any>(false)
  const [data, setData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false);

  let navigate = useNavigate()

  async function getUser(token: string) {
    const user = await GetUser.getUser(token)
    setData(user);
    return user
  }

  const userAuth = useCallback(async (username: string, password: string) => {
    try {
      setHasError(false)
      setIsLoading(true)
      const { json, response } = await AuthService.authLogin(username, password)
      if (response.ok === false) throw new Error('Usuario ou senha incorreto.');
      const { token } = json
      window.localStorage.setItem('token', token)
      await getUser(token)
      navigate('/user/agendamento')

    } catch (error: any) {
      setHasError(true)
      window.localStorage.removeItem('token');
      toast.error(error?.message, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      })
    } finally {
      setIsLoading(false)
    }
  }, [navigate])

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token')
      if (token) {
        try {
          setHasError(null)
          setIsLoading(true)
          await getUser(token)
        } catch (error) {
          console.log(error)
          window.localStorage.removeItem('token')
        } finally {
          setIsLoading(false)
        }
      } else {
        window.localStorage.removeItem('token')
      }
    }
    autoLogin()
  }, [])

  const userLogged = useCallback(() => {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    }
    return false;
  }, []);

  const userLogout = useCallback(
    async function () {
      setIsLoading(true);
      setData(null);
      setHasError(null);
      window.localStorage.removeItem('token');
      setIsLoading(false);
      navigate('/');
    },
    [navigate],
  );

  return <UserContext.Provider value={{ data, userAuth, hasError, isLoading, userLogged, userLogout }}>
    {children}
  </UserContext.Provider>
}