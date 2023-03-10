import React from 'react';
import {connect} from 'react-redux';

import {
    clicarNumericoAction, clicarClearAction, 
    clicarOperacaoAction, clicarResultadoAction
} from '../redux/actions/actionCreators';

function Botoes({clicarNumerico, clicarClear, clicarOperacao, clicarResultado}){
    
    return (
        <div id='botoes'>
            <button id='clear' onClick={clicarClear}>AC</button>          
            <button id='divide' className='operacao' onClick={() => clicarOperacao('/')}>/</button>
            <button id='multiply' className='operacao' onClick={() => clicarOperacao('x')}>x</button>
            
            <button id='seven' className='numerico' onClick={() => clicarNumerico('7')}>7</button>
            <button id='eight' className='numerico' onClick={() => clicarNumerico('8')}>8</button>
            <button id='nine' className='numerico' onClick={() => clicarNumerico('9')}>9</button> 
            <button id='subtract' className='operacao' onClick={() => clicarOperacao('-')}>-</button>
            
            <button id='four' className='numerico' onClick={() => clicarNumerico('4')}>4</button>
            <button id='five' className='numerico' onClick={() => clicarNumerico('5')}>5</button>
            <button id='six' className='numerico' onClick={() => clicarNumerico('6')}>6</button>
            <button id='add' className='operacao' onClick={() => clicarOperacao('+')}>+</button>
            
            <button id='one' className='numerico' onClick={() => clicarNumerico('1')}>1</button>
            <button id='two' className='numerico' onClick={() => clicarNumerico('2')}>2</button>
            <button id='three' className='numerico' onClick={() => clicarNumerico('3')}>3</button>
            
            <button id='zero' className='numerico' onClick={() => clicarNumerico('0')}>0</button>
            <button id='decimal' className='numerico' onClick={() => clicarNumerico('.')}>.</button>      
            <button id='equals' onClick={clicarResultado}>=</button>
        
        </div>
    );
}

const mapDispatchToProps= dispatch => ({
    clicarNumerico: elemento => dispatch(clicarNumericoAction(elemento)),
    clicarClear: () => dispatch(clicarClearAction()), 
    clicarOperacao: operacao => dispatch(clicarOperacaoAction(operacao)),
    clicarResultado: () => dispatch(clicarResultadoAction())
});
  
export default connect(null, mapDispatchToProps)(Botoes);
  
  