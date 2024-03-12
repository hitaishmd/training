
import './App.css';
import Menu from './Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './route-config';
import configureValidations from './Validation';

configureValidations();
function App() {
   
    return (
        
        <BrowserRouter>
        <Menu/>
        <div className="container">
            <Switch>
                {
                    routes.map((route,index)=>
                        <Route path={route.path} key={index} exact={route.exact}>
                            <route.component/>
                        </Route>
                    )
                }
            </Switch>
        </div>
        </BrowserRouter>
    )
  
}

export default App;