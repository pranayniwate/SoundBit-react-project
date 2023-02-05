import './productsList.css'
import { useDispatch} from 'react-redux'
import {addToCart} from '../../features/cartSlice'


const ProductsList = ({val}) =>{
  const dispatch = useDispatch()
  return(
    <div className="single-product" key={val.id}>

      <div className="single-product-img">
        <h3>{val.title}</h3>
        <img src={val.img} alt={val.title}/>
      </div>
        <div className="product-desc">
          <p>{val.desc}</p>
          <h4>Rs {val.price}</h4>
          <button className="buy-btn" onClick={()=>dispatch(addToCart(val))}>Add to Cart</button>
      </div>

    </div>
  )
}

export default ProductsList;