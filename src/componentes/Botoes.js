import React from 'react';
import {connect} from 'react-redux';

import {clicarNumericoAction} from '../redux/actions/actionCreators';

function Botoes({clicarNumerico}){
    
    return (
        <div id='botoes'>
            <button id='clear'>AC</button>          
            <button id='divide' className='operacao'>/</button>
            <button id='multiply' className='operacao'>x</button>
            
            <button id='seven' className='numerico' onClick={() => clicarNumerico('7')}>7</button>
            <button id='eight' className='numerico' onClick={() => clicarNumerico('8')}>8</button>
            <button id='nine' className='numerico' onClick={() => clicarNumerico('9')}>9</button> 
            <button id='subtract' className='operacao'>-</button>
            
            <button id='four' className='numerico' onClick={() => clicarNumerico('4')}>4</button>
            <button id='five' className='numerico' onClick={() => clicarNumerico('5')}>5</button>
            <button id='six' className='numerico' onClick={() => clicarNumerico('6')}>6</button>
            <button id='add' className='operacao'>+</button>
            
            <button id='one' className='numerico' onClick={() => clicarNumerico('1')}>1</button>
            <button id='two' className='numerico' onClick={() => clicarNumerico('2')}>2</button>
            <button id='three' className='numerico' onClick={() => clicarNumerico('3')}>3</button>
            
            <button id='zero' className='numerico' onClick={() => clicarNumerico('0')}>0</button>
            <button id='decimal' className='numerico'>.</button>      
            <button id='equals'>=</button>
        
        </div>
    );
}

const mapDispatchToProps= dispatch => ({
    clicarNumerico: elemento => dispatch(clicarNumericoAction(elemento))
});
  
export default connect(null, mapDispatchToProps)(Botoes);
  
  