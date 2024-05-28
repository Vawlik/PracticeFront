import React from 'react';
import styles from './firstComponent.module.css';

function FirstComponent() {
    return (
        <div className={styles.component}>
            <h2>Первый компонент</h2>
            <p>Это первый компонент с уникальными стилями.</p>
        </div>
    );
}

export default FirstComponent;