import React from 'react';
import {connect} from 'react-redux';

function Display({acumulado, atual}){ 

    return (
        <div id='big-display'>
            <p className='sub-display' id='acumulado'>
                {acumulado}
            </p>
            <p className='sub-display' id='display'>
                {atual}        
            </p>
        </div>
    );
}

const mapStateToProps= state => ({
    acumulado: state.calculadoraReducer.acumulado,
    atual: state.calculadoraReducer.atual
});
  
export default connect(mapStateToProps)(Display);
  