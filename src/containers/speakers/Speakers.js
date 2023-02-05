import './speakers.css'

import {useSelector} from 'react-redux'
import ProductsList from '../productsList/ProductsList'

const Speakers = () =>{
  const data = useSelector((state)=> state.allCart.items)
  const filterData = data.filter((item) => item.category === 'speakers')

  return(
    <section className="speakers-page-container">

      <h1>Speakers</h1>

      <article className="all-products-container">
        {filterData.map((item) =>{

          return <ProductsList key={item.id} val={item}/>
        })}
      </article>

    </section>
  )
}

export default Speakers;