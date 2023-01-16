
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom' 
import CardComp from './Components/CardComp';
import NavbarComp from './Components/NavbarComp';
import Enlarged from './Components/Enlarged';
import Contact from './Components/Contact';
import About from './Components/About';
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    
    <NavbarComp></NavbarComp>

    <Switch>
<Route exact path='/'><CardComp/></Route>

<Route path='/contact'><Contact/></Route>
<Route path='/about'><About/></Route>
    <Route path='/Enlarged/:photoid'><Enlarged/></Route>


    </Switch>
    
    </BrowserRouter>
    
  );
}

export default App;
