import './earphones.css'
import {useSelector} from 'react-redux'
import ProductsList from '../productsList/ProductsList'

const Earphones = () =>{
  const data = useSelector((state)=> state.allCart.items)
  const filterData = data.filter((item) => item.category === 'earphones')

  return(
    <section className="earphones-page-container">

      <h1>Earphones</h1>

      <article className="all-products-container">
        {filterData.map((item) =>{

          return <ProductsList key={item.id} val={item}/>
        })}
      </article>

    </section>
  )
}

export default Earphones;