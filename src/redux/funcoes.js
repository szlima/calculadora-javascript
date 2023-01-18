export const funcaoClicarNumerico= (elemento, {atual, acumulado}) => {
    
    let _atual= /[x/+-]/.test(atual) ? '' : atual,
        _acumulado= acumulado;
    
    switch(elemento){
        case '.':
            if(!_atual.includes('.')){
                _acumulado= (/[0-9]$/.test(_acumulado)) ? _acumulado + elemento : _acumulado + '0' + elemento;
                _atual= (/[0-9]$/.test(_atual)) ? _atual + elemento : _atual + '0' + elemento ;
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

export const funcaoClicarOperacao= (operacao, {atual, acumulado}) => { 
  
    let _atual= atual === 0 ? '' : atual, 
        _acumulado= acumulado;  
    
    switch(operacao){
        case '-':
            if(_acumulado==='' || /[0-9.]$|[0-9.][x/+-]$/.test(_acumulado)){
                _acumulado+= operacao; 
                _atual= operacao;
            }else if(/^[x/+-]$/.test(_acumulado)){
                _acumulado= operacao;
                _atual= operacao;
            }
            break;
  
        default:
            if(!_atual.includes(operacao)){
                if(/^[x/+-]$|[0-9.][x/+-]$/.test(_acumulado))
                    _acumulado= _acumulado.substring(0, _acumulado.length-1) + operacao; 
                else if(/[x/+-][-]$/.test(_acumulado))
                    _acumulado= _acumulado.substring(0, _acumulado.length-2) + operacao; 
                else
                    _acumulado+= operacao; 
                _atual= operacao;
            }      
    }

    return {atual: _atual, acumulado: _acumulado};
};