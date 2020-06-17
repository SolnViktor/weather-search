import React from "react";
import styles from "./Preloader.module.scss";
import CircularProgress from "@material-ui/core/CircularProgress";


export const Preloader = (props) => {


    return (
        <div className={styles.container}>
            <CircularProgress className={styles.preloader}/>
        </div>
    )
}


