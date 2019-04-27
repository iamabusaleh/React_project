import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavComponent from './component/NavComponent'
import {Route, Switch} from 'react-router-dom'

import HomeContainer from './component/HomeContainer';
import AboutContainer from './component/AboutContainer';

function App() {
  return (
    <div id="container">
		<div id="header">
        	<h1>Slick<span className="off">Green</span></h1>
            <h2>A template by Bryant Smith</h2>
        </div>
        <NavComponent />
        
        <div id="leftmenu">

        <div id="leftmenu_top"></div>

				<div id="leftmenu_main">    
                
                <h3>Links</h3>
                        
                <ul>
                    <li><a href="#">SEO</a></li>
                    <li><a href="#">PHP</a></li>
                    <li><a href="#">Ajax</a></li>
                    <li><a href="#">jQuery</a></li>
                    <li><a href="#">Web design</a></li>
                    <li><a href="#">Web Programming</a></li>
                    <li><a href="#">Content Creation</a></li>
                    <li><a href="#">Internet Marketing</a></li>
                    <li><a href="#">XHTML Templates</a></li>
                </ul>
</div>
                
                
              <div id="leftmenu_bottom"></div>
        </div>
        
        
        
        
		<div id="content">
        
        
        <div id="content_top"></div>
        <div id="content_main">
        <Switch>
        <Route path="/" exact  component={HomeContainer} />
        <Route path="/about" exact  component={AboutContainer} />
        </Switch>
        </div>
        <div id="content_bottom"></div>
            
            <div id="footer"><h3><a href="http://www.bryantsmith.com">florida web design</a></h3></div>
      </div>
   </div>
  );
}

export default App;
