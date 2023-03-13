export default function CartProducts({ cart, AddToCart, price }) {
    return (
        <>
            <div className='cart'>
                {
                    cart.length === 0 ? <div><h1>Your Cart Is Empty 🤷‍♂️😢😑🫡</h1></div>
                        :
                        <div>
                            <h1>Your total is {price}$</h1>
                            {
                                cart.map((cartItem, id) => {
                                    return <div key={id} className="cart_items">
                                        <img src={cartItem.item.images[0]} />
                                        <div style={{ display: "block" }}>
                                            <h1> {cartItem.item.title} </h1>
                                            <h2> {cartItem.item.price}$ | {cartItem.item.rating}++ </h2>
                                            <h2> Quantity : {cartItem.quantity} </h2> <br />
                                            <button onClick={() => AddToCart(cartItem.item, false)} >Remove from cart -</button><br /><br />
                                            <p style={{ textAlign: "left" }}>{cartItem.item.description}</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                }
            </div>
        </>
    )
}