import React from 'react';

function Display({acumulado='', atual='0'}){ 

    return (
        <div id='big-display'>
            <p className='sub-display' id='acumulado'>
                {acumulado}
            </p>
            <p className='sub-display' id='display'>
                {atual}        
            </p>
        </div>
    );
}
  
export default Display;
  