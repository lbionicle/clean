import AccServices from "../accServices/AccServices";
import AppFooter from "../appFooter/AppFooter";
import { AdminHeader } from "../appHeader/AppHeader";


const AdminServices = () => {

    return (
        <div className="d-flex flex-column w-100 vh-100">
            <AdminHeader/>
            <AccServices/>
            <AppFooter/>
        </div>
    )
}

export default AdminServices;