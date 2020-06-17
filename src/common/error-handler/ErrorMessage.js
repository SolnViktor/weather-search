import React from "react";
import styles from "./ErrorMessage.module.scss";
import Alert from "@material-ui/lab/Alert";
import {connect} from "react-redux";


export const ErrorMessage = (props) => {


    return (
        <div className={styles.container}>
            {props.isError && <Alert  severity="error">Something wrong. Try enter correct city name.</Alert>}
        </div>
    )
}

let mapStateToProps =(state) => ({
    isError: state.weather.isError
});

export const ErrorMessageContainer = connect(mapStateToProps)(ErrorMessage)
