
import "./modalError.scss"

const ModalError = ({errorHeader, errorMessage}) => {
    
    return (
        <>
            <div class="modal fade" id="errorModal" tabindex="-1" aria-labelledby="exampleErrorModal" aria-hidden="true">
                <div class="modal-dialog modal-md modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div style={{ cursor: "pointer", top: "10px", right: "20px", borderRadius: "0.5rem" }} className="position-absolute" data-bs-dismiss="modal" aria-label="close">
                                <i className="bi fa bi-x-lg"></i>
                            </div>
                            <h5 style={{fontSize: 18, fontWeight: 600}} className="errorHeader mb-3">
                                {errorHeader}
                            </h5>
                            <h6 style={{fontSize: 16}} className="errorMessage">
                                {errorMessage}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalError;