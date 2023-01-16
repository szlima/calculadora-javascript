export const funcaoClicarNumerico= (elemento, {atual, acumulado}) => {
    
    let _atual= acumulado === '' ? '' : atual,
        _acumulado= acumulado;
    
    _atual+= elemento;
    _acumulado+= elemento;
    
    return {atual: _atual, acumulado: _acumulado};
};
  