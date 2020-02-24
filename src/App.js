import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import HomePage from './container/homePage'

function App() {
    return (
        <Router>
            <div className="App">
                <HomePage/>
            </div>
        </Router>
    );
}

export default App;
