export default function ShopingProducts({ data, AddToCart, page, setPage }) {
    return (
        <>
        
            {
                data.length > 1 ? <div className='prds'>
                    {
                        data.slice(page * 12 - 12, page * 12).map((item, id) => {
                            return <div key={id}>
                                <img src={item.images[0]} />
                                <h1>{item.title}</h1><br />
                                <h2>{item.price}$ | {item.rating}++</h2><br />
                                <button onClick={() => AddToCart(item, true)}>Add to cart +</button>
                                <p style={{ textAlign: "left" }}>{item.description}</p>
                            </div>
                        })
                    }
                </div>
                    :
                <div className='loading'>Loading...</div>
            }

            <div className='end'>
                <h1>Current page : {page}</h1>
                <h1>

                    {page != 1 && <span onClick={() => setPage(page - 1)}><a href='#'>Prev |</a></span>}

                    {
                        [...Array(data.length / 10 + 1)].map((empty, id) => {
                            if (id != 0)
                                return <span onClick={() => setPage(id)} key={id}> <a href='#'>{id}</a> </span>
                        })
                    }

                    {page != data.length / 10 && <span onClick={() => setPage(page + 1)}><a href='#'>| Next</a></span>}

                </h1>
            </div>
        </>
    )
}