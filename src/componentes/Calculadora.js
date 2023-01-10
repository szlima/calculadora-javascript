import React from 'react';

import Display from './Display';

function Calculadora(){
  
    return (
        <React.Fragment>
            <div id='calculadora'>
                <Display />
            </div>
        
            <footer>
                <p>Designed and Coded By</p>
                <a href='#'>Peter Weinberg</a>
            </footer>
        </React.Fragment>      
    );
}

export default Calculadora;