import React from 'react';
import Header from './components/Header';
import Routes from './routes';
import './assets/css/main.scss';
function App() {
  return (
    <div className="App mb-5 mt-3 container min-vh-100 bg-dark pb-3">
      <Header pageName={'Home'} />
      <Routes />
    </div>
  );
}

export default App;
