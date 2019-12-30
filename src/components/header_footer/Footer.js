import React from 'react';
import FooterStyles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={FooterStyles.footer}>
            <div className={FooterStyles.container}>
                <span className={FooterStyles.black}>© Tesejz 2019</span>
            </div>
        </footer>
    );
};

export default Footer;