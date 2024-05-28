
import NavPassword from "../navPassword/NavPassword"

import "./authLogin.scss"

const AuthLogin = ({setStage}) => {
    return (
        <div style={{padding: "8rem", zIndex: 3}} className="auth-wrapper-reg vh-100 bg-white d-flex flex-column justify-content-center align-items-center col-4">
            <h2 style={{fontWeight: 600}} className="col-12 mb-3">Авторизация</h2>
            <form id="authLogin" className="wrapper-reg-form col-12 my-4" action="">
                <input className="form-control" name="email" type="email" id="firstName" placeholder="Ваш email" required></input>
                <NavPassword
                    styleElem="mt-3"
                    name="password"
                    placeholder="Пароль"
                    minLength={8}
                    maxLength={16}
                    required
                />
                <div className="form-controls w-100 text-center mt-4">
                    <button className="btn btn-submit btn-dark col-12 text-center" type="submit">Войти</button>
                </div>
            </form>
            <div className="wrapper-reg-login d-flex justify-content-start col-12 mt-3">
                <h6 style={{fontWeight: 300, fontSize: 14}} className="text-secondary text-nowrap">У вас нет учетной записи?</h6>
                <h6 onClick={() => setStage("reg")} style={{cursor: "pointer", fontWeight: 600, fontSize: 14}} className="ms-1">Зарегистрироваться</h6>
            </div>
        </div>
    )
}

export default AuthLogin