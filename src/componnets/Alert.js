import React, {useContext} from "react";
import {AlertContext} from "../context/alert/alertContext";
import {CSSTransition} from "react-transition-group";

export const Alert = () =>  {
    const {alert, hide} = useContext(AlertContext);

    // if (!alert.visible) {
    //     return null
    // }
    return (
        <CSSTransition
            in={alert.visible}
            timeout={{
                enter: 750,
                exit: 350
            }}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
                <strong className="mr-4">Внимание</strong>
                {alert.text}
                <button type="button" onClick={hide} className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>
    )
};
