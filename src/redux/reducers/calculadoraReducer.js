import {
    CLICAR_NUMERICO
} from '../actions/actionTypes';

import {
    clicarNumerico
} from '../funcoes';


const estadoInicial= {
    acumulado: '', 
    atual: '0'
};

export default function calculadoraReducer(state=estadoInicial, action){
  
    switch(action.type){
        
        case CLICAR_NUMERICO:
            return {
                ...state,
                ...clicarNumerico(action.payload.elemento, state)
            };

        default:
            return state;
    }  
}