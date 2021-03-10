import React from 'react';
import './footer.css';

const footer = () => {
    return (
        <footer className= "footer">
        <div className="footer-info">

            <h1>Quipu Dev</h1>
            <p> Based in Perú, Venezuela, Chile, España </p>
            
        </div>
        <div className="footer-contact">
            <h3> Contact Us</h3>
            <p> And let's get down to work</p>

        </div>
        <div className="footer-sns">
            <div className="design-by">
                 Design By QuipuDev
            </div>
            <div className="sns-links">
                <a href="_blank">
                 <i className="fab fa-linkedin linkedin"></i>  
                 </a>
                 <a href="_blank">
                 <i className="fab fa-instagram instagram"></i>  
                 </a>
                 <a href="_blank">
                 <i className="fab fa-facebook facebook"></i>  
                 </a>
            </div>
        </div>
        </footer>
    )
}

export default footer
