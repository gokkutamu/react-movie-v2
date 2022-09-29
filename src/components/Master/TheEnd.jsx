import React from "react";
const arrow = {
    '0' : '/img/project-logo.png',
    '1' : '/img/footer-bottom-img.png',
};

export function TheEnd() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-brand-wrapper">
                        <a href="/" className="logo">
                            <img src={arrow[0]} alt="Filmlane logo" />
                        </a>
                        <ul className="footer-list">
                            <li>
                                <a href="./" className="footer-link">Home</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Movie</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">TV Show</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Web Series</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Pricing</a>
                            </li>
                        </ul>
                    </div>
                    <div className="divider"></div>
                    <div className="quicklink-wrapper">
                        <ul className="quicklink-list">
                            <li>
                                <a href="#" className="quicklink-link">Faq</a>
                            </li>
                            <li>
                                <a href="#" className="quicklink-link">Help center</a>
                            </li>
                            <li>
                                <a href="#" className="quicklink-link">Terms of use</a>
                            </li>
                            <li>
                                <a href="#" className="quicklink-link">Privacy</a>
                            </li>
                        </ul>
                        <ul className="social-list">
                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-pinterest"></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright">
                        &copy; 2022 <a href="#">codewithsadee</a>. All Rights Reserved
                    </p>
                    <img src={arrow[1]} alt="Online banking companies logo" className="footer-bottom-img" />
                </div>
            </div>
        </footer>
    );
}