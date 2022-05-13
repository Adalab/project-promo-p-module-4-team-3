import Profile from './Profile';

function CardPreview(props) {
  return (
    <section className='main-preview'>
    <div className='main-preview-wrapper'>
      <button
        onClick={props.handleResetButton}
        className='main-preview__button js-reset-btn'
      >
        <i className='fa-solid fa-trash-can'></i>Reset
      </button>
    </div>
    <article className='profile-card'>
      <div
        className={`main-preview-wrapper js_style_preview style_00${props.dataCard.palette}`}
      >
        <div className='profile-card-border'>
          <h2 className='profile-card__name js_name'>
            {props.dataCard.name || 'Nombre y apellidos'}
          </h2>
          <p className='profile-card__occupation js_ocupation'>
            {props.dataCard.job || 'Profesión'}
          </p>
        </div>

        {/* AQUÍ VA EL COMPONENTE QUE CONTIENE LA IMAGEN DE LA TARJETA QUE ELIGE EL USUARIO */}
        <Profile avatar={props.avatar} />


        <ul className='profile-card__social'>
          <li>
            <a
              className='social-links js_icon_phone'
              title='Este es mi número de teléfono'
              href={`tel: ${props.dataCard.phone}`}
            >
              <i className='fa-solid fa-mobile-screen-button'></i>
            </a>
          </li>
          <li>
            <a
              className='social-links js_icon_email'
              title='Envíame un email'
              href={`mailto: ${props.dataCard.email}`}
            >
              <i className='fa-regular fa-envelope'></i>
            </a>
          </li>
          <li>
            <a
              className='social-links js_icon_linkedin'
              title='Sigueme en LinkedIn'
              href={`https://www.linkedin.com/in/${props.dataCard.linkedin}`}
            >
              <i className='fa-brands fa-linkedin-in'></i>
            </a>
          </li>
          <li>
            <a
              className='social-links js_icon_github'
              title='Sigueme en GitHub'
              href={`https://github.com/${props.dataCard.github}`}
            >
              <i className='fa-brands fa-github-alt'></i>
            </a>
          </li>
        </ul>
      </div>
     </article>
    </section>
  );
}

export default CardPreview;
