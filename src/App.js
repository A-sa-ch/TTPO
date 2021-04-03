import { Route, Switch } from 'react-router';
import './App.css';
import Catalog from './pages/Catalog';
import Home from './pages/Home';

const  App = () => {
  return (
    <Switch>
      <Route exact path="/" render={()=>Home()}/>
      <Route  path="/catalog" render={()=>Catalog()}/>
    </Switch>
  );
}

export default App;
