import React, { createContext, useEffect, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';

export const PlayerContext = createContext([])
export const CartContext = createContext([])
const Main = () => {
    const { players, initialCart } = useLoaderData()
    const [searchplayer,setsearchPlayer] = useState(players)
    const [text,setserachText] =useState('');
    useEffect(()=>{
         console.log(text);
         if(text === ''){
            setsearchPlayer(players)
         }
         else{
            const newplayer = players.filter(player => player.name.toLowerCase().includes(text.toLowerCase()));
            setsearchPlayer(newplayer)
    
         }
    }, [text,players])
    

    const [cart, setCart] = useState(initialCart)
    return (
        <div>
            <PlayerContext.Provider value={searchplayer}>
            <CartContext.Provider value={[cart, setCart, text, setserachText]}>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            </CartContext.Provider>
            </PlayerContext.Provider>
        </div>
    );
};

export default Main;