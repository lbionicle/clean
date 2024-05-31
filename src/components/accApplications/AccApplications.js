import "./accApplications.scss";

const MyApplications = () => {
    const applications = [
        {
            id: 1,
            services: "Уборка санузла, чистка ковров",
            date: "26.05.2024",
            time: "17:30",
            cost: 16,
            leadTime: 2,
            pay: "Картой",
            appStatus: "Одобрена",
            orderStatus: "В процессе"
        },
        {
            id: 2,
            services: "Мойка окон, чистка мебели",
            date: "27.05.2024",
            time: "10:00",
            cost: 20,
            leadTime: 3,
            pay: "Наличными",
            appStatus: "Не одобрена",
            orderStatus: "Отменена"
        }
    ];

    return (
        <div style={{ padding: "10rem 0 5rem 0", flex: "1 0 auto" }} className="d-flex flex-column align-items-center col-11 mx-auto">
            <input type="text" className="form-control col-12" placeholder="Введите название услуги для поиска заявки..." />
            <div style={{ margin: "2rem auto 5rem auto" }} className="d-flex flex-column align-items-center user-applications col-12">
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
                    <div className="application-delete-header col-1"></div>
                </div>
                {applications.map(application => (
                    <div key={application.id} className="d-flex justify-content-start align-items-center user-applications-application text-center col-12">
                        <div className="applications-application-id col-1">{application.id}</div>
                        <div className="applications-application-services col-3">{application.services}</div>
                        <div className="applications-application-date col-1">{application.date}</div>
                        <div className="applications-application-time col-1">{application.time}</div>
                        <div className="applications-application-cost col-1">{application.cost}</div>
                        <div className="applications-application-leadTime col-1">{application.leadTime}</div>
                        <div className="applications-application-pay col-1">{application.pay}</div>
                        <div className="applications-application-appStatus col-1">{application.appStatus}</div>
                        <div className="applications-application-orderStatus col-1">{application.orderStatus}</div>
                        {application.appStatus === "Не одобрена" && (
                            <div className="applications-application-delete col-1">
                                <i className="bi fa-lg bi-trash3"></i>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const UsersApplications = () => {
    const orders = [
        {
            id: 1,
            email: "client1@gmail.com",
            date: "26.05.2024",
            time: "17:30",
            servicesCount: 2,
            totalCost: 16,
            executionTime: 2,
            paymentMethod: "Картой",
            requestStatus: "Одобрена",
            orderStatus: "Не выполнен"
        },
        {
            id: 2,
            email: "client1@gmail.com",
            date: "26.05.2024",
            time: "17:30",
            servicesCount: 2,
            totalCost: 16,
            executionTime: 2,
            paymentMethod: "Наличными",
            requestStatus: "Одобрена",
            orderStatus: "Не выполнен"
        },
        {
            id: 3,
            email: "client1@gmail.com",
            date: "26.05.2024",
            time: "17:30",
            servicesCount: 2,
            totalCost: 16,
            executionTime: 2,
            paymentMethod: "Картой",
            requestStatus: "Одобрена",
            orderStatus: "Не выполнен"
        },
        {
            id: 4,
            email: "client1@gmail.com",
            date: "26.05.2024",
            time: "17:30",
            servicesCount: 2,
            totalCost: 16,
            executionTime: 2,
            paymentMethod: "Наличными",
            requestStatus: "Одобрена",
            orderStatus: "Не выполнен"
        },
        {
            id: 5,
            email: "client1@gmail.com",
            date: "26.05.2024",
            time: "17:30",
            servicesCount: 2,
            totalCost: 16,
            executionTime: 2,
            paymentMethod: "Наличными",
            requestStatus: "Одобрена",
            orderStatus: "Не выполнен"
        },
        {
            id: 6,
            email: "client1@gmail.com",
            date: "26.05.2024",
            time: "17:30",
            servicesCount: 2,
            totalCost: 16,
            executionTime: 2,
            paymentMethod: "Наличными",
            requestStatus: "Одобрена",
            orderStatus: "Не выполнен"
        }
    ];
    

    return (
        <div style={{ padding: "10rem 0 5rem 0", flex: "1 0 auto" }} className="d-flex flex-column align-items-center col-11 mx-auto">
            <input type="text" className="form-control col-12" placeholder="Введите email для поиска заявки..." />
            <div style={{ margin: "2rem auto 5rem auto" }} className="d-flex flex-column align-items-center user-applications col-12">
                <div className="d-flex justify-content-start align-items-center user-applications-header text-center col-12">
                    <div className="application-email col-1">№</div>
                    <div className="application-email col-2">Email</div>
                    <div className="application-date col-1">Дата</div>
                    <div className="application-time col-1">Время</div>
                    <div className="application-servicesCount col-1">Количество услуг</div>
                    <div className="application-totalCost col-1">Общая стоимость</div>
                    <div className="application-executionTime col-1">Время выполнения</div>
                    <div className="application-paymentMethod col-1">Оплата</div>
                    <div className="application-requestStatus col-1">Статус заявки</div>
                    <div className="application-orderStatus col-1">Статус заказа</div>
                </div>
                {orders.map(({id, email, date, time, servicesCount, totalCost, executionTime, paymentMethod, requestStatus, orderStatus}) => (
                    <div key={id} className="d-flex justify-content-start align-items-center user-applications-application text-center col-12">
                    <div className="application-email col-1">{id}</div>
                    <div className="application-email col-2">{email}</div>
                    <div className="application-date col-1">{date}</div>
                    <div className="application-time col-1">{time}</div>
                    <div className="application-servicesCount col-1">{servicesCount}</div>
                    <div className="application-totalCost col-1">{totalCost}</div>
                    <div className="application-executionTime col-1">{executionTime}</div>
                    <div className="application-paymentMethod col-1">{paymentMethod}</div>
                    <div className="application-requestStatus col-1">{requestStatus}</div>
                    <div className="application-orderStatus col-1">{orderStatus}</div>
                    <div className="d-flex justify-content-between applications-application-edit col-1">
                        <i className="bi fa-lg bi-pencil col-6"></i>
                        <i className="bi fa-lg bi-trash3 col-6"></i>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export {MyApplications, UsersApplications};
