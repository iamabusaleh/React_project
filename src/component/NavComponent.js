import React from 'react';
import { NavLink } from 'react-router-dom'
export default(()=>(
    <div id="menu">
        	<ul>
            	<li className="menuitem"><NavLink to="/">Home</NavLink></li>
                <li className="menuitem"><NavLink to="/about">About</NavLink></li>
                <li className="menuitem"><a href="#">Products</a></li>
                <li className="menuitem"><a href="#">Services</a></li>
                <li className="menuitem"><a href="#">Design</a></li>
              <li className="menuitem"><a href="#">Contact</a></li>
            </ul>
        </div>
))
