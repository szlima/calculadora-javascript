import {
    CLICAR_CLEAR, CLICAR_NUMERICO, EXIBIR_OVERFLOW, ESCONDER_OVERFLOW
} from '../actions/actionTypes';

const estadoInicial= {
    atual: '0',
    acumulado: ''    
};

export default function calculadoraReducer(state=estadoInicial, action){
  
    switch(action.type){

        case CLICAR_CLEAR:
            return {
                ...estadoInicial
            };
        
        case CLICAR_NUMERICO:
            return {
                ...state,
                atual: action.payload.atual,
                acumulado: action.payload.acumulado
            };

        case EXIBIR_OVERFLOW:
            return {
                ...state,
                atual: action.payload.msg
            };
        
        case ESCONDER_OVERFLOW:
            return {
                ...state,
                atual: action.payload.atual
            };

        default:
            return state;
    }  
}