import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";

import { storeContext } from "./store";
import LocationsList from './containers/components/locationsList';



export default function App() {
  return (
    <div className='app'>
      <LocationsList/>
    </div>
  );
}
/*
const TestLocationForm = observer(function TestLocationForm() {
  const store = useContext(storeContext);
  if (!store.isLoading) {
    return <div>Нет данных</div>;
  }
  return <div>Ок</div>;
});


const TestLocationsList = () => {
  const [locationsList, setLocationsList] = useState([{}]);
  return (
    <>
      {locationsList.map((location, index) => (
        <TestLocationForm key={`location-${index}`} />
      ))}
      <button
        onClick={() => {
          setLocationsList([...locationsList, {}]);
        }}
      >
        Добавить тестовую локацию
      </button>
      <button
        onClick={() => {
          console.log(locationsList);
        }}
      >
        Вывести результат в консоль
      </button>
    </>
  );
};
*/
