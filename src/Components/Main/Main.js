import React from 'react';
import CardContainer from './CardContainer';
import DetailContainer from './DetailContainer';
import styles from './Main.module.css';

const Main = () => {
    return (
        <div className={styles.main}>
            <CardContainer />
            <DetailContainer />
        </div>
    );
};

export default Main;
