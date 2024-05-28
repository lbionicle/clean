import AppFooter from "../appFooter/AppFooter";
import { UserHeader } from "../appHeader/AppHeader";
import FormPersonal from "../formPersonal/FormPersonal";


const UserPersonal = () => {

    return (
        <div className="d-flex flex-column w-100 vh-100">
            <UserHeader/>
            <FormPersonal/>
            <AppFooter/>
        </div>
    )
}

export default UserPersonal;