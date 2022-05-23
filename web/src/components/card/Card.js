import CardPreview from './CardPreview';
import Complete from './Complete';
import Design from './Design';
import Share from './Share';
import { useState } from 'react';

// IMPORTS PARA AÑADIR IMAGEN
import React from 'react';
// fin de imports para añadir imagen


function Card(props) {
  const [collapsedClassD, setCollapsedClassD] = useState('');
  const [collapsedClassC, setCollapsedClassC] = useState('collapsed');
  const [collapsedClassS, setCollapsedClassS] = useState('collapsed');

  const [arrowD, setArrowD] = useState('');
  const [arrowC, setArrowC] = useState('toggle_arrow');
  const [arrowS, setArrowS] = useState('toggle_arrow');

  // variables de estado para disabled 

  const [disabled, setDisabled] = useState('')


  // colapsar las secciones
  const handleLegendClick = (data) => {
    const legendID = data.legendID;

    if (legendID === 'designLegend') {
      setCollapsedClassD('');
      setCollapsedClassC('collapsed');
      setCollapsedClassS('collapsed');
      setArrowD('');
      setArrowC('toggle_arrow');
      setArrowS('toggle_arrow');
      props.setMsgHidden('hidden');
      setDisabled('')
      if (collapsedClassD === '') {
        setCollapsedClassD('collapsed');
        setArrowD('toggle_arrow');
      }
    } else if (legendID === 'completeLegend') {
      setCollapsedClassD('collapsed');
      setCollapsedClassC('');
      setCollapsedClassS('collapsed');
      setArrowD('toggle_arrow');
      setArrowC('');
      setArrowS('toggle_arrow');
      props.setMsgHidden('hidden');
      setDisabled('')
      if (collapsedClassC === '') {
        setCollapsedClassC('collapsed');
        setArrowC('toggle_arrow');
      }
    } else if (legendID === 'shareLegend') {
      setCollapsedClassD('collapsed');
      setCollapsedClassC('collapsed');
      setCollapsedClassS('');
      setArrowD('toggle_arrow');
      setArrowC('toggle_arrow');
      setArrowS('');
      props.setMsgHidden('hidden');
      if (collapsedClassS === '') {
        setCollapsedClassS('collapsed');
        setArrowS('toggle_arrow');
      }
    }
  };


  return (
    <main className='main-create'>
      <CardPreview 
      dataCard={props.dataCard} 
      handleResetButton={props.handleResetButton}
      // PROPS PARA AÑADIR IMAGEN CON 'Profile'
      avatar={props.avatar} 
      />

      <form className='wrapper js__form' action='' method='post'>
        <Design
          dataCard={props.dataCard}
          handleInput={props.handleInput}
          handleLegendClick={handleLegendClick}
          collapsedClassD={collapsedClassD}
          arrowD={arrowD}
        />
        <Complete
          dataCard={props.dataCard}
          handleInput={props.handleInput}
          handleLegendClick={handleLegendClick}
          collapsedClassC={collapsedClassC}
          arrowC={arrowC}
          // PROPS PARA AÑADIR IMAGEN CON 'GetAvatar'
          avatar={props.avatar} 
          updateAvatar={props.updateAvatar}

        />
        <Share
          dataCard={props.datacard}
          handleClickCreateCard={props.handleClickCreateCard}
          apiData={props.apiData}
          handleLegendClick={handleLegendClick}
          collapsedClassS={collapsedClassS}
          arrowS={arrowS}
          twitterHidden={props.twitterHidden}
          setTwitterHidden={props.setTwitterHidden}

          msgHidden={props.msgHidden} 
          setMsgHidden={props.setMsgHidden}

          disabled={disabled} 
          setDisabled={setDisabled}
        />
      </form>
    </main>
  );
}

export default Card;
