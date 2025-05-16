import { useContext } from "react"
import { MainContext } from "../../context/MainProvider"
import "./style.css"

function Home() {
  const {addBasket,product} = useContext(MainContext)

  if (product.length===0) {
    return <p>Loading...</p>
  }
  return (
    <>
     <title>Home Page</title>
    <div className="container">
      {
        product.map((item)=>(
           <div className="card" key={item._id}>
          <div className="card_image">
            <img src={item.image} alt="image" />
          </div>
          <div className="card_title">
            <div className="card_name">{item.name}</div>
            <div className="price">{item.price}</div>
            <button>Add Basket</button>
            <button>Add Wishlist</button>
          </div>
        </div>
        ))
       
      }
    </div>
    </>
   
  )
}

export default Home