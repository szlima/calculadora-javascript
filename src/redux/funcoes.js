export const clicarNumerico= (elemento, state) => {
    
    let atual= state.acumulado === '' ? '' : state.atual,
        acumulado= state.acumulado;
    
    atual+= elemento;
    acumulado+= elemento;
    
    return {atual, acumulado};
};
  