import logoAdalab from "../images/logo-adalab.png";

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__paragraph footer-paragraph'>Star Coders © 2022</p>
      <a href='https://adalab.es' target='_blank' rel='noreferrer'>
        <img className='footer__img' src={logoAdalab} alt='Logo Adalab' />
      </a>
    </footer>
  );
};

export default Footer;
