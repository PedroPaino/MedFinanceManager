import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:3000/') // Substitua pela URL correta da sua API
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dados Carregados</h1>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Carregando dados...</p>}
      </header>
    </div>
  );
}

export default App;
