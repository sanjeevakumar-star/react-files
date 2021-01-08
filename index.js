import React from 'react'  
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router,NavLink } from 'react-router-dom'  
import Main from './Main';
import Home from './Home';
import doc from './doc';
const routing = (  
  <Router className='demo'>  
    <div>  
      <h1>welcome to my react table</h1>  
      <ul>  
        <li>
          <NavLink to="/Main" exact activeStyle={{color:'green'}}>MainPage</NavLink>
        </li>
        <li>  
          <NavLink to="/Home" exact activeStyle={{color:'green'}}>HomPage</NavLink>  
        </li>  
        <li>  
          <NavLink to="/doc" exact activeStyle={{color:'green'}}>documentPage</NavLink>  
      
        </li>  
         </ul>  
      <Route path="/Main" component={Main} exact/>
     <Route path="/Home" component={Home}/>
     <Route path="/doc" component={doc}/>
    </div>  
  </Router>  
) 
ReactDOM.render(routing, document.getElementById('root'));        