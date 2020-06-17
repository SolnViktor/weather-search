import React from 'react';
import './App.scss';
import Container from "@material-ui/core/Container";
import styles from './App.module.scss'
import {SearchFormContainer} from "./searchForm/SearchForm";
import {WeatherDescriptionContainer} from "./weatherDescription/WeatherDescription";
import {Preloader} from "./accets/preloader/Preloader";


function App(props) {


    return (
        <div className={styles.app}>
            {/*<Preloader />*/}
            <Container width="1200px">
                <div className={styles.mainContent}>
                    <div className={styles.title}>
                        <h1>Weather search</h1>
                    </div>
                    <SearchFormContainer/>
                    <WeatherDescriptionContainer/>
                </div>
            </Container>
        </div>
    );
}



export default App;
