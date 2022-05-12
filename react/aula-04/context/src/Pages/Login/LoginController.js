import React, { useState, useContext } from 'react';
import useAPI from '../../Services/APIs/Common/useAPI';
import auth from '../../Services/APIs/Auth/Auth';
import LoginView from './LoginView';
import { InfoContext } from '../../store/InfoContext';

const LoginController = () => {

  const authLoginAPI = useAPI(auth.login);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [connectMessage, setConnectMessage] = useState("");
  const [connectCode, setConnectCode] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(InfoContext);


  const onClickLogin = (values) => {
    // navigate(-1);
    console.log("values");
    console.log(login);
    console.log(password);

    let infoSend = {
      email: login,
      password: password,
    }

    setIsLoading(true);
    authLoginAPI.requestPromise(infoSend)
      .then(info => {
        setIsLoading(false);
        context.onMakeLogin(info.token);
      })
      .catch((error) => {
        setIsLoading(false);
        setConnectCode(-1);
        console.log(error.data);
        if (error.status === 401) {
          setConnectMessage(error.data.message);
        } else {
          setConnectMessage("O servidor retornou um erro= " + error.status);
        }

      })
  }

  
  return (
    <LoginView 
      login={login}
      setLogin={setLogin}
      password={password}
      setPassword={setPassword}
      onClickLogin={onClickLogin}
      isLoading={isLoading}
      connectMessage={connectMessage}
      connectCode={connectCode}/>
  )
}


export default LoginController;