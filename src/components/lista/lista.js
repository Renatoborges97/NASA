import React, { useState } from 'react';
import { API_URL } from '../../use-cases/neo-feed';
import { NASA_API_KEY } from '../../use-cases/neo-feed';
import { AsteroidList } from '../../use-cases/neo-feed';


export function Lista() {
  const [asteroidDate, setAsteroidDate] = useState('2023-12-12');
  const [asteroidData, setAsteroidData] = useState([]);

  const searchAsteroidsByDate = async () => {
    try {
      const response = await fetch(
        `${API_URL}?start_date=${asteroidDate}&end_date=${asteroidDate}&api_key=${NASA_API_KEY}`
      );
      const data = await response.json();
      const asteroids = Object.values(data.near_earth_objects[asteroidDate]).map((asteroid) => ({
        id: asteroid.id,
        name: asteroid.name,
        diameter: asteroid.estimated_diameter.kilometers.estimated_diameter_max,
        distance: asteroid.close_approach_data[0].miss_distance.kilometers,
      }));
      setAsteroidData(asteroids);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <>
      <div className='content-container'>
        <h1>Informações sobre o Asteroide</h1>
        <div className='bubble foguete'>
          🚀
        </div>
        <div className='bubble satelite'>
          🛰️
        </div>
        <div className='bubble cometa'>
          ☄️
        </div>
        <div className='bubble astronauta'>
          👨🏽‍🚀
        </div>
      </div>
      <div className=''></div>
      <div class='menu-options'>
        <button className='btn' id="btn" classN onClick={searchAsteroidsByDate} >EXPLORE</button>
        <input
          className="date"
          type="date"
          value={asteroidDate}
          onChange={(e) => setAsteroidDate(e.target.value)}
        />
      </div>
      <div className='informations'>
        {asteroidData.length > 0 ? (
          <AsteroidList asteroids={asteroidData} />
        ) : (
          <p>Nenhum Asteroide localizado na data selecionada.</p>
        )}
      </div >
    </>
  )
}
