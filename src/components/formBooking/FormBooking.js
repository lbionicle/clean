
import { useState } from "react";
import "./formBooking.scss"

import card from "../../resources/icons/form-card.svg"
import cashIn from "../../resources/icons/form-cashIn.svg"

const FormBooking = () => {

    const [paymentMethod, setPaymentMethod] = useState('cash');

    const handlePaymentChange = (method) => {
        setPaymentMethod(method);
    };

    return (
        <div className="booking-form col-12">
            <div className="d-flex flex-column justify-content-center align-items-center booking-form-wrapper col-11 mx-auto">
                <h3 style={{fontWeight: 600, paddingBottom: "1.5rem"}}>Введите данные</h3>
                <form id="booking" className="mx-auto col-4" action="">
                    <div className="col-12 my-2">
                        <label htmlFor="form-street">Улица <span className="text-danger">*</span></label>
                        <input id="form-street" name="form-street" className="form-control" type="text" placeholder="ул. Сурганова" required />
                    </div>
                    <div className="col-12 my-2">
                        <label htmlFor="form-house">Дом <span className="text-danger">*</span></label>
                        <input id="form-house" name="form-house" className="form-control" type="text" placeholder="1" required />
                    </div>
                    <div className="col-12 my-2">
                        <label htmlFor="form-flat">Квартира <span className="text-danger">*</span></label>
                        <input id="form-flat" name="form-flat" className="form-control" type="text" placeholder="1" required />
                    </div>
                    <div className="col-12 my-2">
                        <label htmlFor="form-corpus">Корпус <span className="text-danger">*</span></label>
                        <input id="form-corpus" name="form-corpus" className="form-control" type="text" placeholder="1" required />
                    </div>
                    <div className="col-12 my-2">
                        <label htmlFor="form-entrance">Подъезд <span className="text-danger">*</span></label>
                        <input id="form-entrance" name="form-entrance" className="form-control" type="text" placeholder="1" required />
                    </div>
                    <div className="col-12 my-2">
                        <label htmlFor="form-floor">Этаж <span className="text-danger">*</span></label>
                        <input id="form-floor" name="form-floor" className="form-control" type="text" placeholder="1" required />
                    </div>

                    <h4 style={{fontWeight: 600}} className="text-center mt-5">Выберите способ оплаты</h4>
                    <div className="d-flex justify-content-center mt-3">
                        <div 
                            style={{padding: "1.5rem 2.5rem"}}
                            type="button" 
                            className={`d-flex justify-content-center align-items-center btn btn-origin-form col-5 me-2 ${paymentMethod === 'cash' ? 'active' : ''}`} 
                            onClick={() => handlePaymentChange('cash')}>
                                <img
                                    className={`payment-icon ${paymentMethod === 'cash' ? 'active-icon' : ''}`} 
                                    height={34}
                                    width={34}
                                    src={cashIn}
                                    alt=""
                                />Наличными
                        </div>
                        <div 
                            style={{padding: "1.5rem 2.5rem"}}
                            type="button" 
                            className={`d-flex justify-content-center align-items-center btn btn-origin-form col-5 ${paymentMethod === 'card' ? 'active' : ''}`} 
                            onClick={() => handlePaymentChange('card')}>
                                <img
                                    className={`payment-icon ${paymentMethod === 'card' ? 'active-icon' : ''}`} 
                                    height={34}
                                    width={34}
                                    src={card}
                                    alt=""
                                />Картой
                        </div>
                    </div>

                    <h4 style={{fontWeight: 600}} className="text-center mt-5">Общая стоимость:<br/><span>0</span> BYN</h4>

                    <div className="d-flex justify-content-center text-center my-5 col-12">
                        <button type="submit" className="btn btn-origin col-10">Отправить заявку</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormBooking