import React from 'react';
import '../components/footer.css'; 

const Footer = () => {
    
  return (
    <footer className="footer">
      <div className="footer__container bd-container">
        <h2 className="footer__title">Overflow</h2>
        <p class="update-footer-description">Your destination for expert solutions.</p>

        <div className="footer__social">
          <a href="https://www.linkedin.com/in/rohith-m-profilein/" target='_blank' className="footer__link"><i className="bx bxl-linkedin"></i></a>
          <a href="https://github.com/ROHITH-M10 " target='_blank' className="footer__link"><i className="bx bxl-github"></i></a>
        </div>
        <p className="footer__copy">&#169; 2024 Overflow. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
