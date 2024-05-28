import React from 'react';
import styles from './secondComponent.module.css';

function SecondComponent() {
    return (
        <div className={styles.component}>
            <h2>Второй компонент</h2>
            <p>Это второй компонент с уникальными стилями.</p>
        </div>
    );
}

export default SecondComponent;