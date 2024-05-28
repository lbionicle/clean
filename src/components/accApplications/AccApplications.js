
import "./accApplications.scss"

const AccApplications = () => {

    return (
        <div style={{padding: "10rem 0 5rem 0", flex: "1 0 auto"}} className="d-flex flex-column align-items-center col-11 mx-auto">
            <input type="text" className="form-control col-12" placeholder="Введите название услуги для поиска заявки..."/>
            <div style={{margin: "2rem auto 5rem auto"}} className="d-flex flex-column align-items-center user-applications col-12">
                <div className="d-flex justify-content-start align-items-center user-applications-header text-center col-12">
                    <div className="application-id col-1">№</div>
                    <div className="application-services col-3">Услуги</div>
                    <div className="application-date col-1">Дата</div>
                    <div className="application-time col-1">Время</div>
                    <div className="application-cost col-1">Стоимость</div>
                    <div className="application-leadTime col-1">Время</div>
                    <div className="application-pay col-1">Оплата</div>
                    <div className="application-appStatus col-1">Статус заявки</div>
                    <div className="application-orderStatus col-1">Статус заказа</div>
                </div>
                <div className="d-flex justify-content-start align-items-center user-applications-application text-center col-12">
                    <div className="applications-application-id col-1">1</div>
                    <div className="applications-application-services col-3">Уборка санузла, чистка ковров</div>
                    <div className="applications-application-date col-1">26.05.2024</div>
                    <div className="applications-application-time col-1">17:30</div>
                    <div className="applications-application-cost col-1">16</div>
                    <div className="applications-application-leadTime col-1">2</div>
                    <div className="applications-application-pay col-1">Картой</div>
                    <div className="applications-application-appStatus col-1">Одобрена</div>
                    <div className="applications-application-orderStatus col-1">В процессе</div>
                    <div className="applications-application-edit col-1"><i class="bi fa-lg bi-pencil-fill"></i></div>
                </div>
                <div className="d-flex justify-content-start align-items-center user-applications-application text-center col-12">
                    <div className="applications-application-id col-1">2</div>
                    <div className="applications-application-services col-3">Уборка санузла, чистка ковров</div>
                    <div className="applications-application-date col-1">26.05.2024</div>
                    <div className="applications-application-time col-1">17:30</div>
                    <div className="applications-application-cost col-1">22</div>
                    <div className="applications-application-leadTime col-1">3</div>
                    <div className="applications-application-pay col-1">Картой</div>
                    <div className="applications-application-appStatus col-1">Не одобрена</div>
                    <div className="applications-application-orderStatus col-1">Не выполнен</div>
                    <div className="applications-application-edit col-1"><i class="bi fa-lg bi-pencil-fill"></i></div>
                </div>
                
            </div>
        </div>
    )
}

export default AccApplications