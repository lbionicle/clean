import AppFooter from "../appFooter/AppFooter"
import { MainHeader } from "../appHeader/AppHeader"
import AppServices from "../appServices/AppServices"
import FormBooking from "../formBooking/FormBooking"


const Booking = () => {

    return (
        <>
            <MainHeader/>
            <div style={{padding: "90px 0 0 0"}} className="booking-promo col-12">
                <div style={{padding: "4.7rem 0 0 0"}} className="booking-promo-wrapper col-11 mx-auto text-center">
                    <h2 style={{fontWeight: 600, padding: "0 0 3rem 0"}}>Ваша заявка</h2>
                    <p>Заполните быструю онлайн-форму, чтобы получить индивидуальное предложение на уборку</p>
                </div>
            </div>
            <AppServices/>
            <FormBooking/>
            <AppFooter/>
        </>
    )
}

export default Booking