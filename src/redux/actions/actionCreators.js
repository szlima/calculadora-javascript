import {
    CLICAR_CLEAR, CLICAR_NUMERICO, CLICAR_OPERACAO, 
    CLICAR_RESULTADO, EXIBIR_OVERFLOW, ESCONDER_OVERFLOW
} from './actionTypes';

import {
    funcaoClicarNumerico
} from '../funcoes';

const MSG_OVERFLOW= 'DIGIT LIMIT MET';

const clicarClear= () => ({
    type: CLICAR_CLEAR
});

export const clicarClearAction= () => {
    return (dispatch, getState) => {

        const atual= getState().calculadoraReducer.atual;
        if(atual !== MSG_OVERFLOW)
            dispatch(clicarClear());
    };
};

const clicarNumerico= (atual, acumulado) => ({ 
    type: CLICAR_NUMERICO,
    payload: {
        atual,
        acumulado
    }
});

const exibirOverflow= () => ({
    type: EXIBIR_OVERFLOW,
    payload: {
        msg: MSG_OVERFLOW
    }
});

const esconderOverflow= atual => ({
    type: ESCONDER_OVERFLOW,
    payload: {
        atual
    }
});

export const clicarNumericoAction= elemento => {
    return (dispatch, getState) => {

        const atual= getState().calculadoraReducer.atual;
        if(atual !== MSG_OVERFLOW){
            if(atual.length === 22){
                dispatch(exibirOverflow());
            
                setTimeout(() => dispatch(esconderOverflow(atual))
                    , 1000);
            }else{
                const {atual, acumulado}= funcaoClicarNumerico(elemento, getState().calculadoraReducer);
                dispatch(clicarNumerico(atual, acumulado));
            }
        }
    };
};

export const clicarOperacaoAction= operacao => ({
    type: CLICAR_OPERACAO,
    payload: {
        operacao
    }
});

export const clicarResultadoAction= () => ({
    type: CLICAR_RESULTADO
});