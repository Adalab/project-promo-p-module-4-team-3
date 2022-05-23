import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import dataApi from "../services/fetch";
import Card from "./card/Card";
import Header from "./card/Header";
import Footer from "./Footer";
import Landing from "./landing/Landing";
import ls from "../services/localStorage";

function App() {

  const [apiData, setApiData] = useState({});

  const [dataCard, setDataCard] = useState(
    ls.get("dataCard", {
      palette: 1,
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      photo: "",
    })
  );

  // variable para hacer aparecer y desaparecer twitter btn
  const [twitterHidden, setTwitterHidden ] = useState('hidden')


  // ESTADO PARA AÑADIR IMAGEN
  const [avatar, setAvatar] = useState(ls.get("dataPhoto", ""));

  // función actualizar valores de los inputs
  const handleInput = (data) => {
    const inputValue = data.value;
    const inputChanged = data.name;

    if (inputChanged === "name") {
      setDataCard({
        ...dataCard,
        name: inputValue,
      });
    } else if (inputChanged === "job") {
      setDataCard({
        ...dataCard,
        job: inputValue,
      });
    } else if (inputChanged === "phone") {
      setDataCard({
        ...dataCard,
        phone: inputValue,
      });
    } else if (inputChanged === "email") {
      setDataCard({
        ...dataCard,
        email: inputValue,
      });
    } else if (inputChanged === "linkedin") {
      setDataCard({
        ...dataCard,
        linkedin: inputValue,
      });
    } else if (inputChanged === "github") {
      setDataCard({
        ...dataCard,
        github: inputValue,
      });
    } else if (inputChanged === "palette") {
      setDataCard({
        ...dataCard,
        palette: parseInt(inputValue),
      });
    }
  };

  // useEffect para guardar los datos del objeto 'dataCard' cada vez que se actualice la variable de estado
  useEffect(() => {
    ls.set("dataCard", dataCard);
  }, [dataCard]);

  // función reset
  const handleResetButton = () => {
    setAvatar("");
    setDataCard({
      palette: 1,
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      photo: "",
    });
    setApiData({});
    ls.clear();
    setTwitterHidden('hidden')
  };

  console.log(apiData.success);

  const handleClickCreateCard = () => {
    dataApi(dataCard).then((info) => {
      setApiData(info);
    });

    if (apiData.success === true){
      console.log('soy el true');
      setTwitterHidden('')
    } else {
      setTwitterHidden('hidden')
      console.log('soy el else');
    }
  };

  // FUNCIÓN PARA AÑADIR IMAGEN AL ESTADO
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
    setDataCard({
      ...dataCard,
      photo: avatar,
    });
  };

  // useEffect para guardar la foto
  useEffect(() => {
    ls.set("dataPhoto", avatar);
  }, [avatar]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />

        <Route
          path='/create-card'
          element={
            <>
              <Header />

              <Card
                dataCard={dataCard}

                handleInput={handleInput}

                handleClickCreateCard={handleClickCreateCard}

                apiData={apiData}

                handleResetButton={handleResetButton}

                avatar={avatar}
                updateAvatar={updateAvatar}

                twitterHidden={twitterHidden}
                setTwitterHidden={setTwitterHidden}
              />

              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
