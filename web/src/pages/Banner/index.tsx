import React from 'react';

import successbackgroundImg from '../../assets/images/success-background.svg';

import './styles.css';

function BannerPage() {
    return(
        <div className="banner">
            <div> 
                <img src={successbackgroundImg} alt="background" id="successbackgroundImg" />
            </div>
        </div>
    );
}

export default BannerPage;