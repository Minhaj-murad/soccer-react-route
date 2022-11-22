import React from 'react';

const Players = ({player, handleaddtoCart}) => {
    const{goals, id, name, team, club, age, img} = player;
    return (
        <div >
            <div className='flex w-96 m-auto gap-6 my-4 border border-gray-700 rounded-xl'>
            
            <div className='w-48 h-36 rounded-xl'>
            <img className='w-48 h-36 rounded-xl ' src={img} alt="" />
            </div>
             <div className='p-auto m-auto'>
             <h1 className='font-bold text-lg'>{name}</h1>
             <h3 className='font-semibold text-md'>Country: {team}</h3>
             <h3 className='font-semibold text-md'>Total Goals:{goals}</h3>
               <button onClick={()=> handleaddtoCart(player)} className='bg-blue-900 text-white p-2 rounded-xl'>Add to Draft</button>
             </div>
             
         </div>
        </div>
    );
};

export default Players;