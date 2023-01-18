import {
    CLICAR_CLEAR, CLICAR_NUMERICO, CLICAR_OPERACAO, 
    EXIBIR_OVERFLOW, ESCONDER_OVERFLOW
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

        case CLICAR_OPERACAO:
            return {
                ...state,
                atual: action.payload.atual,
                acumulado: action.payload.acumulado
            };

        default:
            return state;
    }  
}