import React from 'react';
import styles from './page.module.css';

const Header: React.FC = () => {
    // code

    return (
        <div className={styles.headerContainer}>
            <h1 className={styles.mainHeader}>Header of Main</h1>
        </div>
    )
}

export default Header;