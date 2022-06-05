import React from 'react';

const TitlePage = ({title}) => {
    return (
        <div className='title-page-container  "'>
            <h2 className='animate__animated animate__fadeInDownBig'>{title}</h2>
        </div>
    );
}

export default TitlePage;
