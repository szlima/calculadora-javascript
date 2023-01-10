import React from 'react';

import Display from './Display';
import Botoes from './Botoes';

function Calculadora(){
  
    return (
        <React.Fragment>
            <div id='calculadora'>
                <Display />
                <Botoes />
            </div>
        
            <footer>
                <p>Designed and Coded By</p>
                <a href='#'>Peter Weinberg</a>
            </footer>
        </React.Fragment>      
    );
}

export default Calculadora;