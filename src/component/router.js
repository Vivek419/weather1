import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Main from './main'
import Days from './days'

class router extends Component {
    render() {
        return (
            <div>
                <Router>
      <div>
        
          <Route
            path="/"
            exact
            strict
            component={Main}
            
            
          />
          <Route
            path="/weather"
            exact
            strict
            component={Days}
            
          />
          
        </div>
      
    </Router>
                
            </div>
        );
    }
}

export default router;