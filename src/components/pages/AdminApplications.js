import AppFooter from "../appFooter/AppFooter"
import {UsersApplications} from "../accApplications/AccApplications"
import { AdminHeader } from "../appHeader/AppHeader"


const AdminApplications = () => {

    return (
        <div className="d-flex flex-column w-100 vh-100">
            <AdminHeader/>
            <UsersApplications/>
            <AppFooter/>
        </div>
    )
}

export default AdminApplications