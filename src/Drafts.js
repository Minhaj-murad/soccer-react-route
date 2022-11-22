import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
import { deleteShoppingCart, removeFromDb } from './fakeDB';
import { CartContext } from './Main';
import PlayerItem from './Playeritem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Drafts = () => {
    const [cart, setCart] = useContext(CartContext)
  
    const handleRemoveItem = id => {
      const remaining = cart.filter(player => player.id !== id)
      setCart(remaining)
      removeFromDb(id)
       toast.warning('player Removed!', { autoClose: 500 })
    }
  
    let total = 0
  
    for (const player of cart) {
      total = total + player.goals * player.age
    }
  
    const orderHandler = () => {
      if (cart.length) {
        setCart([])
        deleteShoppingCart()
        return toast.success('Order Placed!', { autoClose: 500 })
      }
  
      return toast.error('Cart is empty', { autoClose: 500 })
    }
  
    return (
      <div className='flex min-h-screen items-start justify-center bg-gray-300 text-gray-900'>
        <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 '>
          <h2 className='text-xl font-semibold'>
            {cart.length ? 'Review Cart Items' : 'Cart is EMPTY!'}
          </h2>
          <ul className='flex flex-col divide-y divide-gray-700'>
            {cart.map(player => (
              <PlayerItem
                key={player.id}
                player={player}
                handleRemoveItem={handleRemoveItem}
              />
            ))}
          </ul>
          <div className='space-y-1 text-right'>
            <p>
              Total amount: <span className='font-semibold'>{total}$</span>
            </p>
            <p className='text-sm text-gray-400'>
              Not including taxes and shipping costs
            </p>
          </div>
          <div className='flex justify-end space-x-4'>
            <Link to='/players'>
              <button
                type='button'
                className='px-6 py-2 border rounded-full border-red-400'
              >
                 <span className='sr-only sm:not-sr-only'> Back to shop</span>
              </button>
            </Link>
           <Link to='/shipping'>
           <button
              onClick={orderHandler}
              type='button'
              className='px-6 py-2 border font-semibold rounded-full hover:bg-orange-400 bg-gray-400 text-gray-800'
            >
              Place Order
            </button></Link>
          </div>
        </div>
        <ToastContainer />
      </div>
    )
  }
  
  export default Drafts;
  