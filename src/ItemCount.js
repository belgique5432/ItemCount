import {useState} from 'react';

const ItemCount = () => {
    const [rate, setRate] = useState(0);

    const handleClick = () => {
        setRate(rate+1);

        
    }
    const pokemon = () => {
        if (rate < 1) return;
        else {
            setRate(rate-1)
        }
    }



    return (
        <>
        <div className='icon'>
         <i class="bi bi-cart3"></i> {rate}
         </div>

        <div className='container'>
          <div className='rate'>
                 {rate} 
            </div>
            <div className='functions'>
                <button className='increment' onClick={handleClick}>+</button>
              
                <button className='decrement' onClick={pokemon}>-</button> 
                
                </div>
                </div></>
    )

    
}


export default ItemCount;

