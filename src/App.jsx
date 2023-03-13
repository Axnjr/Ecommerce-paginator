import { useState } from 'react'
import useApi from './useApi'
import "./style.css"
import CartProducts from './CartProducts';
import ShopingProducts from './ShopingProducts';

export default function App() {

	const url = 'https://dummyjson.com/products?limit=100';
	const [data] = useApi(url, "products")
	const [page, setPage] = useState(1)
	const [cart, setCart] = useState([])
	const [cartToggle, setCartToggle] = useState(false)
	const [price,setPrice] = useState(0)

	const QunatityChecker = (item,bool) => {
		var boolean = false ;
		let total = 0;
		cart.forEach(ele => {
			if (ele.item == item) {
				boolean = true
				bool ? ele.quantity++ : ele.quantity--
			}
			total += ele.item.price*ele.quantity
		})
		setPrice(total)
		return boolean
	}
	
	const CartOperations = (item,bool) => {
		let temp = cart;
		if (!QunatityChecker(item,bool)) {
			let cartObject = { "item": item, "quantity": 1 }
			temp.push(cartObject)
		}
		let finalCart =  temp.filter(items => items.quantity != 0)
		setCart(finalCart)
	}

	return (
		<>

			{cartToggle && <h1 style={{ margin: "3rem" }} onClick={() => setCartToggle(false)}>Home</h1>}

			{!cartToggle && <h1 style={{ margin: "3rem" }} onClick={() => setCartToggle(true)}>SHOW CART</h1>}

			{cartToggle && <CartProducts cart={cart} AddToCart={CartOperations} price={price} />}

			{!cartToggle && <ShopingProducts data={data} AddToCart={CartOperations} page={page} setPage={setPage} />}

		</>
	)
}