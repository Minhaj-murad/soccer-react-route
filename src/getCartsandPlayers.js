import { getStoredCart } from './fakeDB'

 const getCartsandPlayers = async () => {
  const playersData = await fetch('data.json')
  const players = await playersData.json()
  console.log(players);

  const savedCart = getStoredCart()
  const initialCart = []
  for (const id in savedCart) {
    const foundplayer = players.find(player => player.id === id)
    if (foundplayer) {
      const quantity = savedCart[id]
      foundplayer.quantity = quantity
      initialCart.push(foundplayer)
    }
  }

  return { players, initialCart }
}
export default getCartsandPlayers;