import React from 'react';
import { authentication } from '../Api/User/User-api'
import { useNavigate } from "react-router-dom"

function LoginPage(props) {
    const [login, setLogin] = React.useState("")
    const [password, setPassword] = React.useState("")
    let history = useNavigate()

    const onInputLogin = (e) => {
        let value = e.target.value
        setLogin(value)
    };
    const onInputPassword = (e) => {
        let value = e.target.value
        setPassword(value)
    }

    const onClickSumbit = async (e) => {
        var authResult = await authentication(login, password)
        if(authResult.access_token){
            localStorage.setItem("authToken",authResult.access_token)
            localStorage.setItem("userId",authResult.id)
            props.setIsAuthenticated(true)
            history("/")
        }
    }

    return (
        <>
            <div className='loginWrapper'>
                <input className='input' onInput={onInputLogin} placeholder="Логин" />
                <input className='input' onInput={onInputPassword} placeholder="Пароль" />
                <input className='input' onClick={onClickSumbit} type={'submit'} placeholder="Отправить" />
            </div>
        </>
    )
}
export default LoginPage;