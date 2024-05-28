
import "./appFooter.scss"

const AppFooter = ({stage}) => {

    const color = stage === "main" ? "#ced4d9" : "white"
    const border = stage === "main" ? "none" : "1px solid #d9d9d9"

    return (
        <footer style={{padding: "5rem 0 0 0", backgroundColor: color, border: border}} className="col-12">
            <div className="d-flex align-items-center justify-content-center col-11 mx-auto">
                <div className="d-flex align-items-center col-2"><i class="bi fa-lg bi-telephone me-1"></i><a href="tel:+375292559257">+ 375 29 255-92-57</a></div>
                <div className="d-flex align-items-center col-2"><i class="bi fa-lg bi-envelope me-1"></i><a href="mailto:info@cleansoap.by">info@cleansoap.by</a></div>
                <h6 style={{fontWeight: 400}} className="col-8 text-end">Премиальные услуги клининга в Минске</h6>
            </div>
            <div style={{fontSize: 14}} className="p-3 bg-origin col-2 mx-auto text-center">
                © 2024 Clean Soap ECommerce
            </div>
        </footer>
    )
}

export default AppFooter;