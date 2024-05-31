import AccReport from "../accReport/AccReport"
import AppFooter from "../appFooter/AppFooter"
import { AdminHeader } from "../appHeader/AppHeader"
import FormPersonal from "../formPersonal/FormPersonal"


const AdminPersonal = () => {

    return (
        <div className="d-flex flex-column w-100 vh-100">
            <AdminHeader/>
            <div style={{flex: "1 0 auto"}} className="d-flex justify-content-between mx-auto col-8">
                <div className="col-5">
                    <FormPersonal/>
                </div>
                <div className="col-5">
                    <AccReport/>
                </div>
            </div>
            <AppFooter/>
        </div>
    )
}

export default AdminPersonal