import React from 'react';
import { useParams } from 'react-router-dom';

const AboutUs = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>Типичная информация о сайте</h2>
            {id ? (
                <p>Дополнительная информация {id}</p>
            ) : (
                <p>Здесь вы можете узнать больше о нас</p>
            )}
        </div>
    );
};

export default AboutUs;