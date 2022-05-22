// IMPORTS PARA AÑADIR IMAGEN
import GetAvatar from './GetAvatar';
import { useState } from 'react';

function Complete(props) {
  let rexName = /^[-a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/;
  let rexJob = /^[-a-zA-ZñÑáéíóúÁÉÍÓÚ0-9\s]*$/;
  let rexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  let rexNum = /^[0-9+]{9,}$/;

  const [nameWarning, setNameWarning] = useState('');
  const [nameClass, setNameClass] = useState('');

  const [jobWarning, setJobWarning] = useState('');
  const [jobClass, setJobClass] = useState('');

  const [emailWarning, setemailWarning] = useState('');
  const [emailClass, setemailClass] = useState('');

  const [phoneWarning, setphoneWarning] = useState('');
  const [phoneClass, setphoneClass] = useState('');

  const [linkedinWarning, setlinkedinWarning] = useState('');
  const [linkedinClass, setlinkedinClass] = useState('');

  const [githubWarning, setgithubWarning] = useState('');
  const [githubClass, setgithubClass] = useState('');

  const handleLegend = (ev) => {
    props.handleLegendClick({
      legendID: ev.currentTarget.id,
    });
  };

  const validationForm = (ev) => {
    console.log(ev.currentTarget.id);

    if (ev.currentTarget.id === 'name') {
      if (ev.currentTarget.value < 1 || !rexName.test(ev.currentTarget.value)) {
        setNameWarning('Por favor ingresa un nombre valido');
        setNameClass('wrong');
        console.log('sucedo');
      } else {
        setNameWarning('');
        setNameClass('');
      }
    }
    if (ev.currentTarget.id === 'job') {
      if (ev.currentTarget.value < 1 || !rexJob.test(ev.currentTarget.value)) {
        setJobWarning('Por favor ingresa un puesto valido');
        setJobClass('wrong');
        console.log('sucedo');
      } else {
        setJobWarning('');
        setJobClass('');
      }
    }

    if (ev.currentTarget.id === 'email') {
      if (
        ev.currentTarget.value < 1 ||
        !rexEmail.test(ev.currentTarget.value)
      ) {
        setemailWarning('Por favor ingresa un email valido');
        setemailClass('wrong');
        console.log('sucedo');
      } else {
        setemailWarning('');
        setemailClass('');
      }
    }

    if (ev.currentTarget.id === 'phone') {
      if (ev.currentTarget.value < 1 || !rexNum.test(ev.currentTarget.value)) {
        setphoneWarning('Por favor ingresa un teléfono valido');
        setphoneClass('wrong');
      } else {
        setphoneWarning('');
        setphoneClass('');
      }
    }

    if (ev.currentTarget.id === 'linkedin') {
      if (ev.currentTarget.value < 1 || !rexJob.test(ev.currentTarget.value)) {
        setlinkedinWarning('Por favor ingresa un user valido');
        setlinkedinClass('wrong');
      } else {
        setlinkedinWarning('');
        setlinkedinClass('');
      }
    }

    if (ev.currentTarget.id === 'github') {
      if (ev.currentTarget.value < 1 || !rexJob.test(ev.currentTarget.value)) {
        setgithubWarning('Por favor ingresa un user valido');
        setgithubClass('wrong');
      } else {
        setgithubWarning('');
        setgithubClass('');
      }
    }
  };

  const handleChangeInput = (ev) => {
    props.handleInput({
      value: ev.target.value,
      name: ev.target.name,
    });
  };

  return (
    <fieldset className='complete'>
      {/* <!------------SECTION LEGEND-------------------> */}

      <legend
        className='complete__legend js_complete_legend'
        id='completeLegend'
        onClick={handleLegend}
      >
        <span>
          <i className='complete__keyboard fa-regular fa-keyboard'></i>
        </span>
        <h2 className='complete__title'>Rellena</h2>
        <span>
          <i
            className={`js_arrow design__up fa-solid fa-chevron-up ${props.arrowC}`}
          ></i>
        </span>
      </legend>

      {/* <!----------------SECTION INPUTS------------------> */}

      <div
        className={`design__container js_design_form ${props.collapsedClassC}`}
      >
        <div className='div__complete name js__inputs'>
          <label className='complete__label' htmlFor='name'>
            Nombre completo
          </label>
          <input
            className={`complete__input js_name_input ${nameClass}`}
            type='text'
            id='name'
            name='name'
            value={props.dataCard.name}
            placeholder='Ej: Sally Jill'
            required
            onChange={handleChangeInput}
            onBlur={validationForm}
          />
          <p className='error__message'>{nameWarning}</p>
        </div>
        <div className='div__complete job js__inputs'>
          <label className='complete__label' htmlFor='job'>
            Puesto
          </label>
          <input
            className={`complete__input js_ocupation_input ${jobClass}`}
            type='text'
            id='job'
            name='job'
            value={props.dataCard.job}
            placeholder='Ej: Front-end unicorn'
            required
            onChange={handleChangeInput}
            onBlur={validationForm}
          />
          <p className='error__message'>{jobWarning}</p>
        </div>
        <label className='complete__label' htmlFor='photo'>
          Imagen de perfil
        </label>

        {/* COMPONENTE PARA AÑADIR IMAGEN Y EL DIV CHIQUITITO QUE LA CONTIENE */}

        <GetAvatar avatar={props.avatar} updateAvatar={props.updateAvatar} />

        {/* <!--------------FIN AÑADIR IMAGEN------------> */}

        <div className='div__complete email js__inputs'>
          <label className='complete__label' htmlFor='email'>
            Email
          </label>
          <input
            className={`complete__input js_input_email ${emailClass}`}
            type='email'
            id='email'
            name='email'
            value={props.dataCard.email}
            placeholder='Ej: sally-hill@gmail.com'
            required
            onChange={handleChangeInput}
            onBlur={validationForm}
          />
          <p className='error__message'>{emailWarning}</p>
        </div>
        <div className='div__complete phone js__inputs'>
          <label className='complete__label' htmlFor='phone'>
            Teléfono
          </label>
          <input
            className={`complete__input js_input_phone ${phoneClass}`}
            type='tel'
            id='phone'
            name='phone'
            value={props.dataCard.phone}
            placeholder='Ej: 689555555'
            required
            onChange={handleChangeInput}
            onBlur={validationForm}
          />
          <p className='error__message'>{phoneWarning}</p>
        </div>
        <div className='div__complete linkedin js__inputs'>
          <label className='complete__label' htmlFor='linkedin'>
            Linkedin
          </label>
          <input
            className={`complete__input js_input_linkedin ${linkedinClass}`}
            type='text'
            id='linkedin'
            name='linkedin'
            value={props.dataCard.linkedin}
            placeholder='Ej: sally-hill'
            required
            onChange={handleChangeInput}
            onBlur={validationForm}
          />
          <p className='error__message'>{linkedinWarning}</p>
        </div>
        <div className='div__complete github js__inputs'>
          <label className='complete__label' htmlFor='github'>
            Github
          </label>
          <input
            className={`complete__input js_input_github ${githubClass}`}
            type='text'
            id='github'
            name='github'
            value={props.dataCard.github}
            placeholder='Ej: sally-hill'
            required
            onChange={handleChangeInput}
            onBlur={validationForm}
          />
          <p className='error__message'>{githubWarning}</p>
        </div>
      </div>
    </fieldset>
  );
}

export default Complete;
