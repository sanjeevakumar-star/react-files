import React from 'react'  
import ReactDOM from 'react-dom';
import { Route,BrowserRouter as Router,NavLink } from 'react-router-dom'  
import Main from './Main';
import Home from './Home';
import Data from './Data';
import Emp from './Emp';
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
         <NavLink to="/Data" exact activityStyle={{color:'green'}}>student data</NavLink>
       </li>
       <li>
         <NavLink to="/Emp" exact activityStyle={{color:'green'}}>emp data</NavLink>
       </li>
     
         </ul>  
      <Route path="/main" component={Main} exact/>
     <Route path="/home" component={Home}/>
  <Route path="/data" component={Data}/>
 <Route path="/emp" component={Emp}/>
    </div>  
  </Router>  
) 
ReactDOM.render(routing, document.getElementById('root'));        