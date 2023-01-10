import React from 'react';

function Botoes(){
    
    return (
        <div id='botoes'>
            <button id='clear'>AC</button>          
            <button id='divide' className='operacao'>/</button>
            <button id='multiply' className='operacao'>x</button>
            
            <button id='seven' className='numerico'>7</button>
            <button id='eight' className='numerico'>8</button>
            <button id='nine' className='numerico'>9</button> 
            <button id='subtract' className='operacao'>-</button>
            
            <button id='four' className='numerico'>4</button>
            <button id='five' className='numerico'>5</button>
            <button id='six' className='numerico'>6</button>
            <button id='add' className='operacao'>+</button>
            
            <button id='one' className='numerico'>1</button>
            <button id='two' className='numerico'>2</button>
            <button id='three' className='numerico'>3</button>
            
            <button id='zero' className='numerico'>0</button>
            <button id='decimal' className='numerico'>.</button>      
            <button id='equals'>=</button>
        
        </div>
    );
}
  
export default Botoes;
  