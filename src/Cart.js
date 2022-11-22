import React from 'react';

const Cart = ({cart,handleaddtoRemove}) => {
  console.log(cart);
  return (
    <div className='w-auto bg-black text-white sticky top-24 '>
      
      <h2 >Order summary </h2>
      <h2>Total Selected player:{cart.length} </h2>
      {
                cart.map(player=><p
                     
                    key={player.id}
                   
                    >  {player.name} 
                    <button className='bg-blue-900 text-white px-3 ml-3 rounded-xl' onClick={()=>handleaddtoRemove(player)}>X</button> </p>)
            }
    </div>
  );
};

export default Cart;