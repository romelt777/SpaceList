import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [launches, setLaunches] = useState([]);

  const fetchLaunchData = () => {
    fetch("https://api.spacexdata.com/v4/launches/")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setLaunches(data)
      })
  }

  //fetches data on first render. 
  useEffect(() => {
    fetchLaunchData();
  }, []);


  return (
    <div className="App" >
      <header className="App-header">
      <input
        type="text"
        placeholder="Enter Keywords"
        class="SearchBar"
      />
          {launches.length > 0 && (
            <div className='dataOutput' >
              {launches.map((launch) => 
              (
                <>
                  <ul className='launch show'>
                    <img
                      src={launch.links.patch.small}
                    />
                    <h3 key={launch.flight_number}>Flight Number: {launch.flight_number} Name: {launch.name}</h3>
                    <p key={launch.name}>Details: {launch.details}</p>
                  </ul>
                </>
              ))}
            </div>
          )}
      </header>
    </div>
  );
}

export default App;
