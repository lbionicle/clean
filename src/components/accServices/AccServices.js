
import "./accServices.scss"

const AccServices = () => {
    const services = [
        {
            id: 1,
            serviceName: "Уборка помещений",
            cost: 6,
            executionTime: 0.213
        },
        {
            id: 2,
            serviceName: "Уборка санузлов",
            cost: 5,
            executionTime: 0.213
        },
        {
            id: 3,
            serviceName: "Мойка окон",
            cost: 3,
            executionTime: 0.213
        },
        {
            id: 4,
            serviceName: "Чистка ковров",
            cost: 2,
            executionTime: 0.213
        },
        {
            id: 5,
            serviceName: "Чистка мебели",
            cost: 3,
            executionTime: 0.213
        },
        {
            id: 6,
            serviceName: "Генеральная уборка",
            cost: 4,
            executionTime: 0.213
        }
    ];
    

    return (
        <div style={{ padding: "10rem 0 5rem 0", flex: "1 0 auto" }} className="d-flex flex-column align-items-center col-6 mx-auto">
        <div style={{ margin: "2rem auto 5rem auto" }} className="d-flex flex-column align-items-center admin-services col-12">
            <div style={{fontWeight: 600}} className="d-flex justify-content-start align-items-center admin-services-header text-center col-12">
                <div className="services-id col-1">№</div>
                <div className="services-serviceName col-4">Название услгуи</div>
                <div className="services-cost col-3">Стоимость</div>
                <div className="services-executionTime col-3">Время выполнения</div>
            </div>
            {services.map(({id, serviceName, cost, executionTime}) => (
                <div key={id} className="d-flex justify-content-start align-items-center admin-services-service text-center col-12">
                    <div className="services-service-id col-1">{id}</div>
                    <div className="services-service-serviceName col-4">{serviceName}</div>
                    <div className="services-service-cost col-3">{cost}</div>
                    <div className="services-service-executionTime col-3">{executionTime}</div>
                    <div className="services-services-edit d-flex justify-content-between col-1">
                        <i className="bi fa-lg bi-pencil col-12"></i>
                        {/* <i className="bi fa-lg bi-trash3 col-6"></i> */}
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default AccServices