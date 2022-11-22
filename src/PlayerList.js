import React, { useContext, useState, } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './Cart';
import Players from './Players';
import './playerlist.css'
import { CartContext, PlayerContext } from './Main';
import { addToDb } from './fakeDB';
import './playerlist.css'

const PlayerList = () => {
    const players = useContext(PlayerContext)
  const [cart, setCart, text, setserachText] = useContext(CartContext)
      
    console.log(players);

  

    const handleaddtoCart =(player) =>{
        const exists =cart.find(play=>play.id===player.id);
        if (exists){
            alert('this product is already added')
        }
        else{
            const newcart =[...cart,player];
        setCart(newcart)
        addToDb(player.id)
        return toast.success('Player added succesfully!', { autoClose: 500 })
        }
        
    }
    const handleaddtoRemove=(player) =>{
        const remaining= cart.filter(play=> play.id !== player.id);
        setCart(remaining);
        return toast.warning('Player removed succesfully!', { autoClose: 500 })
        
    }

    
    return (
        <div className='full-container relative  '>
             <input onChange={(e)=> setserachText(e.target.value)} className='border border-gray-700 mt-4' type="text" name="" id="" placeholder='Search Player' /> 
             <span><button className='bg-blue-900 text-white p-2 rounded-xl'> Search</button></span>

          <div className='home-container'>
            
            <div className='player-container'>
            {
                players.map(player => <Players 
                key={player.id}
                player={player}
                handleaddtoCart={handleaddtoCart}
                ></Players>)
            }
            </div>
            <div className='cart  '>
            <Cart cart={cart} handleaddtoRemove={handleaddtoRemove}></Cart>
            </div>
            <ToastContainer></ToastContainer>
           </div>
        </div>
    );
};

export default PlayerList;