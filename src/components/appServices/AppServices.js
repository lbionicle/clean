
import cleanBuilding from "../../resources/img/cleanBuilding.png"
import cleanBathroom from "../../resources/img/cleanBathroom.png"
import cleanCarpets from "../../resources/img/cleanCarperts.png"
import cleanFurniture from "../../resources/img/cleanFurniture.png"
import generalClean from "../../resources/img/generalClean.png"
import washWindows from "../../resources/img/washWindows.png"


import "./appServices.scss"
import ModalService from "../modalService/ModalService"
import { useState } from "react"

const AppServices = ({stage}) => {

    const [title, setTitle] = useState("Уборка помещений");

    const services = [
        {src: cleanBuilding, title: "Уборка помещений"},
        {src: cleanBathroom, title: "Уборка санузлов"},
        {src: washWindows, title: "Мойка окон"},
        {src: cleanCarpets, title: "Чистка ковров"},
        {src: cleanFurniture, title: "Чистка мебели"},
        {src: generalClean, title: "Генеральная уборка"}
    ]

    const onClickService = (title) => {
        setTitle(title)
    }

    const renderServices = (arr) => {
        const items = arr.map(({src, title}) => {

            return (
                <div className="wrapper-services-service col-2 px-2 text-center">
                    <div className="position-relative">
                        <img height={250} width={250} src={src} alt="" />
                        {stage !== "main" ? <i onClick={() => onClickService(title)} style={{top: "50%", left: "50%", cursor: "pointer"}} className="bi fa-4x bi-plus-circle position-absolute translate-middle" data-bs-toggle="modal" data-bs-target="#serviceModal"></i> : null}
                    </div>
                    <h5 style={{fontWeight: 400}} className="mt-3">{title}</h5>
                </div>
            )
        })

        return (
            <div className="wrapper-services-row d-flex jusify-content-center align-items-center mt-5">
                {items}
            </div>
        )
    }

    return (
        <div id="services" className="services col-12">
            <div style={{margin: "5rem auto"}} className="wrapper-services col-11 text-center">
                {stage === "main" ? <h3 style={{fontWeight: 600}}>Наши клининговые услуги</h3> : <h3 style={{fontWeight: 600}}>Выберите услугу</h3>}
                {renderServices(services)}
            </div>
            <ModalService title={title}/>
        </div>
    )
}

export default AppServices;