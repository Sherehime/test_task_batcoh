import { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { storeContext } from '../../store';

import './locationForm.css';

const LocationForm = observer(
  function LocationForm({ location, locationIndex, setLocations }) {
    const store = useContext(storeContext);

    const servers = store.servers.reduce(
      (prevServers, server) => {
        if ( (server.location === location.location) &&
            (server.env === location.env) )
            prevServers.push(server.name);
        return prevServers;
      }, []
    );

    const handleChange = property => {
      return event => {
        setLocations(
          prevLocations => {
            const newLocations = [...prevLocations];
            newLocations.splice(
              locationIndex, 
              1, 
              {
                ...location,
                ...{[property]: +event.target.value}
              }
            );
  
            return newLocations;
          }
        );
      }
    } 

    const handleHintChange = event => {
      setLocations(
        prevLocations => {
          const newLocations = [...prevLocations];
          newLocations.splice(
            locationIndex, 
            1, 
            {
              ...location,
              ...{hint: event.target.value.slice(2)}
            }
          );

          return newLocations;
        }
      );
    }

    const handleDeleteClick = event => {
      setLocations(
        prevLocations => {
          const newLocations = [...prevLocations];
          newLocations.splice(
            locationIndex, 
            1,
          );

          return newLocations;
        }
      );
    }

    return (
      <div className='form'>
        <div className='form__header'>
          <i className="fas fa-vial"></i>
          Тестовая локация {locationIndex + 1}
        </div>
        <div className='form__delete'>
          <i 
            className="fas fa-trash-alt"
            onClick={handleDeleteClick}
          ></i>
        </div>
        <div className='form__location-label'>
          Локация
        </div>
        {store.isLoading ?
          (
            <select
              className='form__location-input input-with-icon'
              onChange={handleChange('location')}
              value={location.location}
            >
              <option value=''>&#xf3c5; Выберите Локацию</option>
              {store.locations.map(
                (storeLocation, index) => (
                  <option
                    value={storeLocation.location}
                    key={index}
                  >&#xf3c5; {storeLocation.name}</option>
                )
              )}
            </select>
          )
        :
          (
            <div
              className='form__location-input loading-background'
            />
          )
        }
        <div className='form__env-label'>
          Среда
        </div>
        {store.isLoading ?
          (
            <select
              className='form__env-input input-with-icon'
              onChange={handleChange('env')}
              value={location.env}
            >
              <option value=''>&#xf299; Выберите Среду</option>
              {store.envs.map(
                (storeEnv, index) => (
                  <option
                    value={storeEnv.env}
                    key={index}
                  >&#xf299; {storeEnv.name}</option>
                )
              )}
            </select>
          )
        :
          (
            <div
              className='form__env-input loading-background'
            />
          )
        }
        <div className='form__servers-label'>
          Серверы
        </div>
        {store.isLoading ?
          (
            <div className='form__servers-data input-with-icon'>
              {servers.length ?
                (
                  <>
                    &#xf233; {servers.join(', ')}
                  </>
                )
              :
                (
                  <>
                    &#xf057; Нет Серверов
                  </>
                )
              }
            </div>
          )
        :
          (
            <div
              className='form__servers-data loading-background'
            />
          )
        }
        <div className='form__hint-label'>
          Подсказка
        </div>
        {store.isLoading ?
          (
            <input 
              type='text' 
              className='form__hint-input input-with-icon'
              value={`\uf128 ${location.hint}`}
              onChange={handleHintChange}
              placeholder={'Комментарий по локации'}
            />
          )
        :
          (
            <div
              className='form__hint-input loading-background'
            />
          )
        }
      </div>
    );
  }
);

export default LocationForm;