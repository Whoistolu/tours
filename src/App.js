import React, { useState, useEffect } from 'react'
import Loading from './components/Loading';
import Tours from './components/Tours';
const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [Loading, setLoading] = useState(true);
  const [Tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    const response = await fetch(url);
    const tours = await response.json();
  };

  useEffect(() => {
    fetchTours();
  },[]);

  if (Loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <main>
      <Tours />
    </main>
  )
}

export default App;