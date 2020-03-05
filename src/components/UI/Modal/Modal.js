import React from "react";
import Mstyle from "../Modal/Modal.css";
import BackDrop from "../Backdrop/backdrop";

const Modal = props => {
    return (

        <React.Fragment>
            <div className={Mstyle.Modal} style={{display: props.show ? 'block':'none'}}>
                <BackDrop show={props.show} closeModal={props.closeModal}>Back</BackDrop>
                {props.children}
            </div>
        </React.Fragment>
    );
}

export default Modal;