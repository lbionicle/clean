
import verification from "../../resources/icons/verification.svg";
import banner from "../../resources/img/banner.jpg";

import { HashLink as Link } from "react-router-hash-link";
import { MainHeader } from "../appHeader/AppHeader";
import AppSectors from "../appSectors/AppSectors";
import AppServices from "../appServices/AppServices";

import mainAims from "../../resources/img/main-aims.jpg";
import AppFooter from "../appFooter/AppFooter";

const MainPage = () => {

    return (
        <>
            <MainHeader/>
            <div style={{padding: "90px 0 0 0"}} className="main-promo col-12">
                <div style={{padding: "11rem 0"}} className="main-promo-wrapper col-11 mx-auto">
                    <div style={{padding: "3rem 2.5rem 2.25rem 2.5rem", fontWeight: 600}} className="promo-wrapper-banner bg-origin col-4 mx-auto rounded-4 text-center fs-4 lh-2 position-relative">
                        <img style={{top: "-15%", left: "45%"}} className="position-absolute" height={60} width={58} src={verification} alt="verification" />
                        Премиальные услуги клининга в Минске
                    </div>
                </div>
            </div>
            <div style={{maxHeight: 600, height: 600, overflow: "hidden"}} className="d-flex align-items-center justify-content-center position-relative main-banner-wrapper col-12">
                <img style={{maxWidth: "100%", height: "auto", maxHeight: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", opacity: .6}} className="img-fluid position-absolute w-100 top-50 start-50" src={banner} alt="Login Page"/>
                <div style={{zIndex: 3}} className="banner-wrapper-content text-center col-4">
                    <h1 style={{fontWeight: 600, fontSize: 36}}>Лучшая клининговая служба Минска</h1>
                    <h3 style={{fontWeight: 500, fontSize: 24, margin: "50px 0"}}>Мы стремимся обеспечить уборку помещений наших клиентов на самом высоком уровне</h3>
                    <Link onClick={() => {window.scrollTo(0, 0)}} to="/booking">
                        <div style={{fontWeight: 600}} className="btn btn-origin mx-5 px-5 py-2 rounded-4">Заказать уборку</div>
                    </Link>
                </div>
            </div>
            <AppSectors choiceSectors="bussines"/>
            <AppSectors choiceSectors="dwelling"/>
            <AppServices stage="main"/>
            <div className="main-aims col-12">
                <div className="main-aims-wrapper col-11 mx-auto">
                    <div className="aims-wrapper-cleaners col-6 mx-auto d-flex">
                        <div className="wrapper-cleaners-photo col-3 overflow-hidden rounded">
                            <img style={{backgroundSize: "contain", height: "441.55px", transform: "translate(-40%, 0)"}} className="" src={mainAims} alt="" />
                        </div>
                        <div style={{borderRadius: "0 0.5rem 0.5rem 0"}} className="wrapper-cleaners-content bg-origin col-9 p-5">
                            <h4 style={{fontWeight: 600}} className="col-12">Миссия наших уборщиков</h4>
                            <h6 className="col-12 py-3">Мы стремимся к совершенству уборки. Более чем за 5 лет мы создали надежную команду опытных уборщиков Минска и заслужили надежную репутацию за достижение отличных результатов.</h6>
                            <ul style={{fontWeight: 600}} className="col-12">
                                <li className="check-mission col-12">Обеспечиваем высочайший уровень обслуживания для каждого клиента</li>
                                <li className="check-mission col-12">Сохраняем честность, инициативность, профессионализм и гордимся своим положением на рынке</li>
                                <li className="check-mission col-12">Выстраиваем долгосрочные отношения с нашими клиентами, предоставляя качественные услуги по конкурентоспособным ценам</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="locations" style={{padding: "4.31rem 0"}} className="main-region col-12">
                <div className="main-region-wrapper text-center col-11 mx-auto">
                    <h4 style={{fontWeight: 600}}>Районы Минска</h4>
                    <div style={{padding: "4rem 0 0 0"}} className="region-wrapper-regions d-flex flex-wrap col-6 mx-auto">
                        {["Заводской", "Октябрьский", "Советский", "Ленинский", "Партизанский", "Фрунзенский", "Московский", "Первомайский", "Центральный"].map((item) => {
                            return <h6 className="col-4 mt-2 dot-marker">{item}</h6>
                        })}
                    </div>
                </div>
            </div>
            <AppFooter stage={"main"}/>
        </>
    )
}

export default MainPage;