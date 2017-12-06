import React from 'react';
import ConnectFourGame from './ConnectFourGame';

const App = () => {
  return (
    <div className="App">
      <ConnectFourGame width={6} height={5} winlen={4}/>
    </div>
  );
};

export default App;
