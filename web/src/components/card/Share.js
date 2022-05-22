
function Share(props) {

  const handleClick = (ev) => {
    ev.preventDefault();
    props.handleClickCreateCard();
    // no me funciona el ternario pero hace lo que quiero
    props.setTwitterHidden(props.apiData.succes ? 'hidden' : '')
  };


  const handleLegend = (ev) => {
    props.handleLegendClick({
      legendID: ev.currentTarget.id,
    });
  };


  return (
    <fieldset className='share'>
      <legend
        className='share__legend js_share_legend'
        id='shareLegend'
        onClick={handleLegend}
      >
        <i className='share__nodes fa-solid fa-share-nodes'></i>
        <h2 className='share__title'>Comparte</h2>
        <i
          className={`js_arrow design__up fa-solid fa-chevron-up ${props.arrowS}`}
        ></i>
      </legend>

      <div
        className={`design__container js_design_form ${props.collapsedClassS}`}
      >
        <button
          onClick={handleClick}
          type='submit'
          className='share__button js_create_button js_buttonOrange'
        >
          <i className='fa-solid fa-address-card share__card'></i>Crear tarjeta
        </button>

        <div className='share__div--title'>
          {/* <!-- Aquí va la url creada --> */}
          <a
            target='blank'
            className='share__link js_url'
            href={props.apiData.cardURL}
          >
            {props.apiData.success ? props.apiData.cardURL : ""}
          </a>
          <p>{props.apiData.success === false ? props.apiData.error : ""}</p>
          <button
            type='button'
            className={`share__twitter js_shareButtonTwitter ${props.twitterHidden}`}
          >
            <a
              target='_blank'
              rel='noreferrer'
              href={`https://twitter.com/intent/tweet?text=He%20creado%20una%20tarjeta%20profesional.%20¡Conóceme!%20&url=${props.apiData.cardURL}`}
              className='share__twitter__link'
            >
              <i className='fa-brands fa-twitter share__twi'></i> Compartir en
              twitter
            </a>
          </button>
        </div>
      </div>
    </fieldset>
  );
}

export default Share;
