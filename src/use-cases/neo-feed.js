export const NASA_API_KEY = `GXM4fVKhRQntkU6cyPLpWFheBzAueopvbx19k5l1`;
export const API_URL = `https://api.nasa.gov/neo/rest/v1/feed`;

export const AsteroidList = ({ asteroids }) => {


  return (
    <ul>
      {asteroids.map((asteroid) => (
        <li key={asteroid.id}>
          <strong>{asteroid.name}</strong> - Diâmetro: {asteroid.diameter} km, Distancia da Terra: {asteroid.distance} km
        </li>
      ))}
    </ul>
  );
};


