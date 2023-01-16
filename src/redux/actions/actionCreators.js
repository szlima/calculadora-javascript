import {
    CLICAR_CLEAR, CLICAR_NUMERICO, 
    CLICAR_OPERACAO, CLICAR_RESULTADO
} from './actionTypes';

import {
    funcaoClicarNumerico
} from '../funcoes';

export const clicarClearAction= () => ({
    type: CLICAR_CLEAR
});

const clicarNumerico= (atual, acumulado) => ({ 
    type: CLICAR_NUMERICO,
    payload: {
        atual,
        acumulado
    }
});

export const clicarNumericoAction= elemento => {
    return (dispatch, getState) => {
        const {atual, acumulado}= funcaoClicarNumerico(elemento, getState().calculadoraReducer);
        dispatch(clicarNumerico(atual, acumulado));
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