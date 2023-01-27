import classes from "./Modal.module.css";
import { Fragment } from "react";
import  {createPortal}from "react-dom";
function Backdrop(props){

    return <div className={classes.backdrop} onClick={props.onClose}/>;

}
function ModalOverlay(props) {
    return (
        <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
        </div>
    );
    }
const portalElement=document.getElementById('overlays');
function Modal(props) {
    return (
        <Fragment>
           {createPortal(<Backdrop onClose={props.onClose}/>,portalElement)}
           {createPortal(<ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,portalElement)}

            {/* {props.show && <ModalOverlay>{props.children}</ModalOverlay>} */}
        </Fragment>
    );
}
    export default Modal;