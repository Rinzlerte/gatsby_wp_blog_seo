import React from 'react';
import FooterStyles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={FooterStyles.footer}>
            <div className="container">
                <span className="muted">©Tesejz footer</span>
            </div>
        </footer>
    );
};

export default Footer;