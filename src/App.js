import React from 'react';
import './App.scss';
import Container from "@material-ui/core/Container";
import styles from './App.module.scss'
import {SearchFormContainer} from "./searchForm/SearchForm";
import {WeatherDescriptionContainer} from "./weatherDescription/WeatherDescription";
import {Preloader} from "./common/preloader/Preloader";
import {connect} from "react-redux";
import {ErrorMessageContainer} from "./common/error-handler/ErrorMessage";


function App(props) {

    return (
        <div className={styles.app}>
            {props.isFetching && <Preloader />}
            <Container width="1200px">
                <div className={styles.mainContent}>
                    <div className={styles.title}>
                        <h1>Weather search</h1>
                    </div>
                    <ErrorMessageContainer />
                    <SearchFormContainer/>
                    <WeatherDescriptionContainer/>
                </div>
            </Container>
        </div>
    );
}
let mapStateToProps = (state) => ({
    isFetching: state.weather.isFetching
})
const AppContainer = connect (mapStateToProps)(App)

export default AppContainer;
