
import flats from "../../resources/img/flats.jpg"
import gym from "../../resources/img/gym.jpg"
import houses from "../../resources/img/houses.jpg"
import medical from "../../resources/img/medical.jpg"
import office from "../../resources/img/office.jpg"
import shoppingCentre from "../../resources/img/shoppingСentre.jpg"

import "./appSectors.scss"

const AppSectors = ({choiceSectors}) => {

    const sectors = {
        bussines: [
            {src: office, title: "Офисы", descr: "Регулярная уборка, обслуживание санузлов и поставка расходных материалов для офисов и других рабочих помещений."},
            {src: shoppingCentre, title: "Торговые центры", descr: "Качество обслуживания клиентов является приоритетом в мире розничной торговли, и презентация является центральной частью этого процесса."},
            {src: gym, title: "Спортивные залы", descr: "Мы можем обеспечить регулярную, гарантированную и надежную уборку спортивных залов."},
            {src: medical, title: "Здравоохранение", descr: "Мы понимаем важность поддержания высоких стандартов гигиены в больницах, стоматологических кабинетах и ​​кабинетах общей практики."}
        ],
        dwelling: [
            {src: flats, title: "Квартиры", descr: "Регулярная уборка, обслуживание санузлов и поставка расходных материалов для офисов и других рабочих помещений."},
            {src: houses, title: "Частные дома", descr: "Систематическая уборка домов необходима для поддержания чистоты, гигиены и общего благополучия."}
        ]
    }

    const renderSectors = (arr) => {
        const items = arr.map(({src, title, descr}) => {

            return (
                <div className="d-flex flex-column col-3 px-2">
                    <div className="position-relative overflow-hidden rounded-4" style={{ height: '260px' }}>
                        <img src={src} alt="Офисы" className="w-100 h-100 object-fit-cover" />
                        <div style={{top: "45%", padding: "0.75rem 1.5rem"}} className="position-absolute bg-white w-100">
                            <h5 style={{fontSize: 16, fontWeight: 600}} className="mb-0">{title}</h5>
                        </div>
                    </div>
                    <p style={{fontSize: 16, margin: "25px 0 0 0"}} className="card-text text-start">
                        {descr}
                    </p>
                </div>
            )
        })

        return (
            <div className="col-12 d-flex justify-content-center">
                {items}
            </div>
        )
    }

    return (
        <div id={choiceSectors === "bussines" ? "sectors" : null} style={{padding: "5rem 0"}} className="main-bussines-sectors col-12">
            <div className="wrapper-bussines-sectors col-11 mx-auto text-center">
                <h3 style={{fontWeight: 600}}>{choiceSectors === "bussines" ? "Секторы бизнеса" : "Секторы жилых помещений"}</h3>
                <h4 style={{fontWeight: 500, margin: "3rem 0"}}>{choiceSectors === "bussines" ? "Мы предоставляем профессиональные клининговые услуги в Минске для различных секторов бизнеса" : null}</h4>
                {choiceSectors === "bussines" ? renderSectors(sectors.bussines) : renderSectors(sectors.dwelling)}
            </div>
        </div>
    )
}

export default AppSectors