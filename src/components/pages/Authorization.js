import { useState } from "react";
import loginPage from "../../resources/img/login-main.png"
import AuthLogin from "../authLogin/AuthLogin";
import AuthReg from "../authReg/AuthReg";

const Authorization = () => {
    const [stage, setStage] = useState("login");

    return (
        <div style={{position: "relative", overflow: "hidden"}} className="auth-wrapper d-flex align-items-center justify-content-center vh-100">
            <img style={{width: "100%", maxWidth: "100%", height: "auto", zIndex: 0}} className="img-fluid full-height-img position-absolute top-0 left-0" src={loginPage} alt="Login Page" />
            {stage === "login" ? <AuthLogin setStage={setStage}/> : <AuthReg setStage={setStage}/>}
        </div>
    )
}

export default Authorization;
