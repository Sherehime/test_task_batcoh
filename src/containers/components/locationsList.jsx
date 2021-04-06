import { useState } from 'react';

import LocationForm from './locationForm';

import './locationsList.css';

export default function LocationsList() {
  const [ locations, setLocations ] = useState([]);

  return (
    <div className='list'>
      {locations.map(
        (location, index) => (
          <LocationForm
            location={location}
            locationIndex={index}
            setLocations={setLocations}
            key={index}
          />
        )
      )}
      <button
        className='list__button'
        onClick={
          () => setLocations(
            prevLocations => [
              ...prevLocations, 
              { location: 0, env: 0, hint: '' }
            ]
          )
        }
      >
        <i className="fas fa-plus"></i>
        Добавить тестовую локацию...
      </button>
      <button
        className='list__button'
        onClick={
          () => console.log(locations)
        }
      >
        <i className="fas fa-terminal"></i>
        Вывести в консоль...
      </button>
    </div>
  )
}