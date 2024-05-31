

import "./accClients.scss"

const AccClients = () => {
    const clients = [
        {
            id: 1,
            firstName: "Мария",
            lastName: "Михайловская",
            phone: "+375292559257",
            email: "admin@gmail.com",
            password: "admin",
            status: "Не заблокирован"
        },
        {
            id: 2,
            firstName: "Алина",
            lastName: "Мелеш",
            phone: "+375292555256",
            email: "client1@gmail.com",
            password: "1111",
            status: "Не заблокирован"
        },
        {
            id: 3,
            firstName: "Виктория",
            lastName: "Невская",
            phone: "+375292555255",
            email: "client2@gmail.com",
            password: "2222",
            status: "Не заблокирован"
        },
        {
            id: 4,
            firstName: "Федор",
            lastName: "Онисенко",
            phone: "+375292555254",
            email: "client3@mail.ru",
            password: "3333",
            status: "Заблокирован"
        },
        {
            id: 5,
            firstName: "Евгений",
            lastName: "Самойлов",
            phone: "+375292555253",
            email: "client4@mail.ru",
            password: "4444",
            status: "Не заблокирован"
        }
    ];
    

    return (
        <div style={{ padding: "10rem 0 5rem 0", flex: "1 0 auto" }} className="d-flex flex-column align-items-center col-11 mx-auto">
            <input type="text" className="form-control col-12" placeholder="Введите email для поиска аккаунта клиента..." />
            <div style={{ margin: "2rem auto 5rem auto" }} className="d-flex flex-column align-items-center admin-clients col-12">
                <div style={{fontWeight: 600}} className="d-flex justify-content-start align-items-center admin-clients-header text-center col-12">
                    <div className="clients-id col-1">№</div>
                    <div className="clients-firstName col-2">Имя</div>
                    <div className="clients-lastName col-2">Фамилия</div>
                    <div className="clients-phone col-1">Телефон</div>
                    <div className="clients-email col-2">Email</div>
                    <div className="clients-password col-1">Пароль</div>
                    <div className="clients-status col-2">Блокировка</div>
                </div>
                {clients.map(({id, firstName, lastName, phone, email, password, status}) => (
                    <div key={id} className="d-flex justify-content-start align-items-center admin-clients-client text-center col-12">
                        <div className="clients-client-id col-1">{id}</div>
                        <div className="clients-client-firstName col-2">{firstName}</div>
                        <div className="clients-client-lastName col-2">{lastName}</div>
                        <div className="clients-client-phone col-1">{phone}</div>
                        <div className="clients-client-email col-2">{email}</div>
                        <div className="clients-client-password col-1">{password}</div>
                        <div className="clients-client-status col-2">{status}</div>
                        <div className="clients-client-edit d-flex justify-content-between col-1">
                            <i className="bi fa-lg bi-pencil col-6"></i>
                            <i className="bi fa-lg bi-trash3 col-6"></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AccClients;