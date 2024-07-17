import { Outlet } from 'react-router-dom';
import './App.css';
import { ReservasProvider } from './Context/context';

function App() {
  return (
    <ReservasProvider>
        <div className="App">
          <Outlet/>
        </div>
    </ReservasProvider>
    
  );
}

export default App;
