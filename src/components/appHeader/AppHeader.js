
import { HashLink as Link } from "react-router-hash-link";

import logo from "../../resources/icons/logo.svg";
import userLogo from "../../resources/icons/user-logo.svg"

import "./appHeader.scss"

const MainHeader = () => {
    return (
        <div style={{boxShadow: "0px 5px 30px 0px rgba(206, 211, 218, 0.40)", maxHeight: 90, zIndex: 100}} className="header-main-page bg-white col-12 position-fixed">
            <div style={{fontWeight: 600}} className="header-main-wrapper d-flex justify-content-between align-items-center col-11 mx-auto">
                <div className="main-wrapper-logo">
                    <Link onClick={() => {window.scrollTo(0, 0)}} to="/main"><img height={90} width={90} className="img-fluid" src={logo} alt="Логотип" /></Link>
                </div>
                <div className="main-wrapper-panel d-flex align-items-center">
                    <ul className="sectors d-flex">
                        <Link to="/main#sectors" className="mx-4">Секторы</Link>
                        <Link to="/main#services" className="mx-4" href="#services">Услуги</Link>
                        <Link onClick={() => {window.scrollTo(0, 0)}} to="/about-us" className="mx-4">О нас</Link>
                        <Link to="/main#locations" className="mx-4" href="#locations">Локации</Link>
                    </ul>
                    <Link onClick={() => {window.scrollTo(0, 0)}} to="/booking">
                        <div style={{fontWeight: 600}} className="btn btn-origin mx-5 px-5 py-2 rounded-4">Заказать уборку</div>
                    </Link>
                    <div class="dropdown-center">
                        <img src={userLogo} alt="userLogo" role="button" data-bs-toggle="dropdown" aria-expanded="false"/>

                        <ul style={{boxShadow: "0px 10px 15px 0px rgba(0, 0, 0, 0.25)"}} class="dropdown-menu mt-2 p-3">
                            <li onClick={() => {window.scrollTo(0, 0)}} style={{cursor: "pointer"}}><Link to="/user-info" class="dropdown-item">Личный кабинет</Link></li>
                            <li onClick={() => {window.scrollTo(0, 0)}} style={{cursor: "pointer"}}><Link to="/" class="dropdown-item text-danger">Выйти<i class="bi fa-lg bi-box-arrow-right ms-1"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

const UserHeader = () => {
    return (
        <div style={{boxShadow: "0px 5px 30px 0px rgba(206, 211, 218, 0.40)", maxHeight: 90, zIndex: 100}} className="header-main-page bg-white col-12 position-fixed">
            <div style={{fontWeight: 600}} className="header-main-wrapper d-flex justify-content-between align-items-center col-11 mx-auto">
                <div className="main-wrapper-logo">
                    <Link onClick={() => {window.scrollTo(0, 0)}} to="/main"><img height={90} width={90} className="img-fluid" src={logo} alt="Логотип" /></Link>
                </div>
                <div className="main-wrapper-panel d-flex align-items-center">
                    <ul className="sectors d-flex">
                        <Link onClick={() => {window.scrollTo(0, 0)}} to="/user-info" className="mx-4">Персональная информация</Link>
                        <Link onClick={() => {window.scrollTo(0, 0)}} to="/user-applications" className="mx-4">Мои заявки</Link>
                    </ul>
                    <div style={{fontWeight: 600}} className="btn btn-origin mx-5 px-5 py-2 rounded-4">
                        <Link onClick={() => {window.scrollTo(0, 0)}} to="/booking">Заказать уборку</Link>
                    </div>
                    <div class="dropdown-center">
                        <img src={userLogo} alt="userLogo" role="button" data-bs-toggle="dropdown" aria-expanded="false"/>

                        <ul style={{boxShadow: "0px 10px 15px 0px rgba(0, 0, 0, 0.25)"}} class="dropdown-menu mt-2 p-3">
                            <li style={{cursor: "pointer"}}><Link onClick={() => {window.scrollTo(0, 0)}} to="/main" class="dropdown-item">Главная страница</Link></li>
                            <li style={{cursor: "pointer"}}><Link onClick={() => {window.scrollTo(0, 0)}} to="/" class="dropdown-item text-danger">Выйти<i class="bi fa-lg bi-box-arrow-right ms-1"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AdminHeader = () => {
    return (
        <div style={{boxShadow: "0px 5px 30px 0px rgba(206, 211, 218, 0.40)", maxHeight: 90, zIndex: 100}} className="header-main-page bg-white col-12 position-fixed">
            <div style={{fontWeight: 600}} className="header-main-wrapper d-flex justify-content-between align-items-center col-11 mx-auto">
                <div className="main-wrapper-logo">
                    <Link onClick={() => {window.scrollTo(0, 0)}} to="/main"><img height={90} width={90} className="img-fluid" src={logo} alt="Логотип" /></Link>
                </div>
                <div className="main-wrapper-panel d-flex align-items-center">
                    <ul className="sectors d-flex">
                        <Link onClick={() => {window.scrollTo(0, 0)}} to="/admin-info" className="mx-4">Настройка акканута</Link>
                        <Link onClick={() => {window.scrollTo(0, 0)}} to="/admin-clients" className="mx-4">Клиенты</Link>
                        <Link onClick={() => {window.scrollTo(0, 0)}} to="/admin-services" className="mx-4">Услуги</Link>
                        <Link onClick={() => {window.scrollTo(0, 0)}} to="/admin-applications" className="mx-4">Заявки</Link>
                    </ul>
                    <div class="dropdown-center ms-3">
                        <img src={userLogo} alt="userLogo" role="button" data-bs-toggle="dropdown" aria-expanded="false"/>

                        <ul style={{boxShadow: "0px 10px 15px 0px rgba(0, 0, 0, 0.25)"}} class="dropdown-menu mt-2 p-3">
                            <li style={{cursor: "pointer"}}><Link onClick={() => {window.scrollTo(0, 0)}} to="/main" class="dropdown-item">Главная страница</Link></li>
                            <li style={{cursor: "pointer"}}><Link onClick={() => {window.scrollTo(0, 0)}} to="/" class="dropdown-item text-danger">Выйти<i class="bi fa-lg bi-box-arrow-right ms-1"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {MainHeader, UserHeader, AdminHeader}