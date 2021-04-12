import './App.css';
import NavBar from './NavBar';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { Home } from './Home';
import Productos from './Productos';
import PersonalDeSalud from './PersonalDeSalud';
import Sesiones from './Sesiones';
import Profesional from './Profesional';

function App() {
  return (
    <Router>
    <div className="App">
    <NavBar/>
    <Route exact path="/" component={Home}/>
    <Route  path="/Productos" render={()=><div><Productos/></div>}/>
    <Route  path="/PersonalDeSalud" render={()=><div><PersonalDeSalud/></div>}/>
    <Route  path="/Sesiones" render={()=><div><Sesiones/></div>}/>
    <Route  path="/Profesional" render={()=><div><Profesional/></div>}/>
    </div>
    </Router>
  );
}

export default App;
