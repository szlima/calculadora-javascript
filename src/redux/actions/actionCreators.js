import {
    CLICAR_CLEAR, CLICAR_NUMERICO, 
    CLICAR_OPERACAO, CLICAR_RESULTADO
} from './actionTypes';

export const clicarClearAction= () => ({
    type: CLICAR_CLEAR
});

export const clicarNumericoAction= elemento => ({ 
    type: CLICAR_NUMERICO,
    payload: {
        elemento
    }
});

export const clicarOperacaoAction= operacao => ({
    type: CLICAR_OPERACAO,
    payload: {
        operacao
    }
});

export const clicarResultadoAction= () => ({
    type: CLICAR_RESULTADO
});