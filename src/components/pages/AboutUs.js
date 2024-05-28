import AppFooter from "../appFooter/AppFooter";
import { MainHeader } from "../appHeader/AppHeader";

import companyImg from "../../resources/img/aboutUs-company.jpg";
import servicesImg from "../../resources/img/aboutUs-services.jpg";


const AboutUs = () => {

    return(
        <>
            <MainHeader/>
            <div style={{padding: "90px 0 0 0"}} className="aboutUs-promo col-12">
                <div style={{padding: "6.25rem 0"}} className="aboutUs-promo-wrapper col-11 mx-auto text-center">
                    <h2 style={{fontWeight: 600}}>О нас</h2>
                    <div style={{padding: "3rem 2.5rem 2.25rem 2.5rem", fontWeight: 600}} className="promo-wrapper-banner bg-origin col-5 mx-auto rounded-4 text-center fs-4 lh-2 mt-4 position-relative">
                        Мы предоставляем профессиональные клининговые услуги предприятиям, жилым комплексам и частным домам
                    </div>
                </div>
            </div>
            <div className="aboutUs-content col-12">
                <div className="d-flex flex-column justify-content-center align-items-center aboutUs-content-wrapper col-11 mx-auto">
                    <div className="content-wrapper-info col-8">
                        <h3 style={{fontWeight: 600}} className="content-info-title">
                            О компании  
                        </h3>
                        <p className="content-info-subtitle my-4">
                            Clean Soap ECommerce – это профессиональная служба уборки, которая работает по всему Минску. Мы работаем в сфере клининга более 5 лет, и за последние 3 года этот бизнес рос значительными темпами. Благодаря разнообразной клиентской базе мы можем поделиться богатым опытом с каждым новым клиентом и комплексно удовлетворить его потребности в уборке. 
                        </p>
                        <div className="content-info-img col-12 overflow-hidden">
                            <img style={{objectFit: "cover", maxHeight: "300px", width: "100%"}} src={companyImg} alt="company" />
                        </div>
                    </div>
                    <div className="content-wrapper-info col-8 mt-5">
                        <h3 style={{fontWeight: 600}} className="content-info-title">
                            Услуги  
                        </h3>
                        <p className="content-info-subtitle my-4">
                            Clean Soap ECommerce предоставляет специалистов по всему Минску для выполнения всех задач по уборке.Наши уборщики работают быстро, эффективно и дружелюбно. В настоящее время мы предоставляем специалистов по уборке офисов, торговых центров, спортивных залов, а также медицинских учреждений. Нашим клиентам доступны услуги, такие как мытье окон, чистка ковров и мебели, услуги санузлов, глубокая уборка и поставка расходных материалов для уборки.
                        </p>
                        <div className="content-info-img col-12 overflow-hidden">
                            <img style={{objectFit: "cover", maxHeight: "300px", width: "100%"}} src={servicesImg} alt="company" />
                        </div>
                    </div>
                    <div className="content-wrapper-info col-8 mt-5">
                        <h3 style={{fontWeight: 600}} className="content-info-title">
                            Наша миссия:  
                        </h3>
                        <ul className="content-info-subtitle my-4">
                            <li className="check-mission pb-3">Обеспечить высочайший уровень обслуживания и качества работы каждому клиенту.</li>
                            <li className="check-mission pb-3">Строить долгосрочные отношения с клиентами, предоставляя качественные услуги по конкурентоспособным ценам.</li>
                            <li className="check-mission pb-3">Поддержание честности, инициативы, профессионализма и гордости за свое положение на рынке.</li>
                            <li className="check-mission pb-3">Обеспечить долгосрочную стабильность как для клиентов, так и для сотрудников благодаря усердной работе и приверженности делу.</li>
                            <li className="check-mission pb-3">Заботиться о наших сотрудниках и относиться к ним с уважением, а также поддерживать хорошо обученный и мотивированный персонал.</li>  
                        </ul>
                    </div>
                </div>
            </div>
            <AppFooter/>
        </>
    )
}

export default AboutUs;