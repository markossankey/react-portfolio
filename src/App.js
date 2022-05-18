import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import "bootswatch/dist/solar/bootstrap.min.css";
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Home />
      </div>
    </HashRouter>
  );
}

export default App;
