import './headphones.css'
import {useSelector} from 'react-redux'
import ProductsList from '../productsList/ProductsList'

const HeadPhones = () =>{
  const data = useSelector((state)=> state.allCart.items)
  const filterData = data.filter((item) => item.category === 'headphones')

  return(
    <section className="headphones-page-container">

      <h1>HeadPhones</h1>

      <article className="all-products-container">
        {filterData.map((item) =>{

          return <ProductsList key={item.id} val={item}/>
        })}
      </article>

    </section>
  )
}

export default HeadPhones;