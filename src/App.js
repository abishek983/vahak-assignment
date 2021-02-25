import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CarPage from './views/CarPage';
import HomePage from './views/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/bid/id" component={CarPage}/>
      </Switch>
    </Router>
  );
}

export default App;
