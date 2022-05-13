import Footer from "../Footer";
import Logo from "../../images/logo-awesome.svg";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <section className='main-landing'>
        <Link to='/create-card'>
          <img className='main-landing__img' src={Logo} alt='Logo' />
        </Link>
        <h1 className='main-landing__title landing-h1'>
          Crea tu tarjeta de visita
        </h1>
        <p className='main-landing__paragraph landing-paragraph'>
          Crea mejores contactos profesionales de forma fácil y cómoda
        </p>
        <div className='main-landing__advantages'>
          <div className='main-landing__advantages__container'>
            <i className='advantages__icon fa-regular fa-object-ungroup'></i>
            <p className='landing-paragraph'>Diseña</p>
          </div>

          <div className='main-landing__advantages__container'>
            <i className='advantages__icon fa-regular fa-keyboard'></i>
            <p className='landing-paragraph'>Rellena</p>
          </div>

          <div className='main-landing__advantages__container'>
            <i className='advantages__icon fa-solid fa-share-nodes'></i>
            <p className='landing-paragraph'>Comparte</p>
          </div>
        </div>
        <Link to='/create-card' className='main-landing__link'>
          Comenzar
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default Landing;
