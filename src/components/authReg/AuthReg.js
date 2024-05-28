
import NavPassword from "../navPassword/NavPassword"

import "./authReg.scss"

const AuthReg = ({setStage}) => {

    return (
        <div style={{padding: "8rem", zIndex: 3}} className="auth-wrapper-reg vh-100 bg-white d-flex flex-column justify-content-center align-items-center col-4">
            <h2 style={{fontWeight: 600}} className="col-12 mb-3">Регистрация</h2>
            <form id="authReg" className="wrapper-reg-form col-12 my-4" action="">
                <input className="form-control" name="firstName" type="name" id="firstName" placeholder="Имя" required></input>
                <input className="form-control mt-3" name="lastName" type="name" id="lastName" placeholder="Фамилия" required></input>
                <input className="form-control mt-3" name="email" type="email" id="email" placeholder="Ваш email" required></input>
                <input className="form-control mt-3" name="telephone" type="number" id="telephone" pattern="+[3][7][5][0-9]{9}" placeholder="+375123456789" required></input>
                <NavPassword
                    styleElem="mt-3"
                    name="password"
                    placeholder="Пароль"
                    minLength={8}
                    maxLength={16}
                    required
                />
                <NavPassword
                    styleElem="mt-3"
                    name="submit-password"
                    placeholder="Подтвердить пароль"
                    minLength={8}
                    maxLength={16}
                    required
                />
                <div className="form-controls w-100 text-center mt-4">
                    <button className="btn btn-submit btn-dark col-12 text-center" type="submit">Зарегистрироваться</button>
                </div>
            </form>
            <div className="wrapper-reg-login d-flex justify-content-start col-12 mt-3">
                <h6 style={{fontWeight: 300, fontSize: 14}} className="text-secondary">У вас уже есть учетная запись?</h6>
                <h6 onClick={() => setStage("login")} style={{cursor: "pointer", fontWeight: 600, fontSize: 14}} className="ms-1">Войти</h6>
            </div>
        </div>
    )
}

export default AuthReg;