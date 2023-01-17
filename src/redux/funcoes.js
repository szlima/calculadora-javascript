export const funcaoClicarNumerico= (elemento, {atual, acumulado}) => {
    
    let _atual= atual,
        _acumulado= acumulado;
    
    switch(elemento){
        case '.':
            if(!_atual.includes('.')){
                _acumulado= (_acumulado === '') ? '0' + elemento : _acumulado + elemento;
                _atual= (_atual === '') ? '0' + elemento : _atual + elemento;
            }        
            break;
            
        case '0': 
            _atual= _acumulado === '' ? '' : _atual;
            if(_atual !== '0'){
                _atual+= elemento;
                _acumulado+= elemento;
            }
            break;
              
        default:            
            if(_atual === '0'){
                _atual= elemento;
                _acumulado= _acumulado.substring(0, _acumulado.length-1) + elemento;
              
            }else {       
                _atual+= elemento;
                _acumulado+= elemento;
            }
    }
    
    return {atual: _atual, acumulado: _acumulado};
};
  