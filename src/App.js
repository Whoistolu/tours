import React, { useState, useEffect } from 'react'
import Loading from './components/Loading';
import Tours from './components/Tours';
const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [Loading, setLoading] = useState(true);
  const [Tours, setTours] = useState([]);
  if (Loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <div>Tours Project</div>
  )
}

export default App;