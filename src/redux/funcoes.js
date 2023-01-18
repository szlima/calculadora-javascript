
export const funcaoClicarNumerico= (elemento, {atual, acumulado}) => {
    
    let _atual= /[x/+-]/.test(atual) ? '' : atual,
        _acumulado= acumulado;
    
    if(_acumulado.includes('=')){
        _acumulado= '';
        _atual= '0';    
    }

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

    if(_acumulado.includes('=')){
        _acumulado= _atual + operacao;
        _atual= operacao;
        
    }else{
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
    }
    return {atual: _atual, acumulado: _acumulado};
};

export const funcaoClicarResultado= acumulado => {

    if(/^[x/+-]$/.test(acumulado) || acumulado === '') 
        return {atual: 'NAN', acumulado: '=NAN'};
    else if(!acumulado.includes('=') && !/^[x/]/.test(acumulado)){
  
        let expressaoOriginal= acumulado;
        let resultado= acumulado;
  
        if(/[x/+-]$/.test(resultado)){
            expressaoOriginal= resultado.substring(0, resultado.length-1);
            resultado= expressaoOriginal;
        }
  
        while(/[x/+-]/.test(resultado.substring(1))){
  
            let posInicio= 0, posFim= resultado.length;    
            const operacao= /[x/]/.test(resultado) ? 
                    resultado.match(/[x/]/)[0] :
                    resultado.substring(1).match(/[+-]/)[0],
                posOperador= resultado.substring(1).indexOf(operacao)+1;          
  
            for(let i= posOperador-1; i>=0; i--){
                if(/[-]/.test(resultado[i])){
                    posInicio= i;
                     break;        
                }else if(/[x/]/.test(resultado[i])){
                    posInicio= i+1;
                    break;
                }else if(/[+]/.test(resultado[i])){
                    if(i!==0){
                        posInicio= i+1;
                        break;
                    }
                }
            }
  
            for(let i= posOperador+1; i<resultado.length; i++){
                if(/[x/+-]/.test(resultado[i])){
                    if(/[-]/.test(resultado[i]) && i=== posOperador+1)
                        continue;
                    else{
                        posFim= i;
                        break;
                    }
                }        
            }
  
            let aux;
            const numPrimeiro= Number(resultado.substring(posInicio,posOperador));
            const numSegundo= Number(resultado.substring(posOperador+1,posFim));
  
            switch(operacao){
                case 'x':
                    aux= numPrimeiro * numSegundo;
                    break;
                case '/':
                    aux= numPrimeiro / numSegundo;
                    break;
                case '+':
                    aux= numPrimeiro + numSegundo;
                    break;
                case '-':
                    aux= numPrimeiro - numSegundo;        
                    break;
            }    
  
            resultado= (resultado[posInicio]==='-' && aux>0) ?
            resultado.substring(0,posInicio) + '+' + aux + resultado.substring(posFim) : 
            resultado.substring(0,posInicio) + aux + resultado.substring(posFim);    
        }
  
        if(resultado[0] === '+')
            resultado= resultado.substring(1);
  
        return {atual: resultado, acumulado: expressaoOriginal + '=' + resultado};
    }
};