import {
    CLICAR_NUMERICO
} from '../actions/actionTypes';

const estadoInicial= {
    atual: '0',
    acumulado: ''    
};

export default function calculadoraReducer(state=estadoInicial, action){
  
    switch(action.type){
        
        case CLICAR_NUMERICO:
            return {
                ...state,
                atual: action.payload.atual,
                acumulado: action.payload.acumulado
            };

        default:
            return state;
    }  
}