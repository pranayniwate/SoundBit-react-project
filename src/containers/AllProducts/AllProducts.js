import './allproducts.css'
import {useSelector} from 'react-redux'
import { useState } from "react";
import ProductsList from '../productsList/ProductsList'

const AllProducts = () =>{
  const data = useSelector((state) => state.allCart.items)


  const categories = data.map((item)=> item.category)
  const uniqueCategories = [...new Set(categories)]

  const [list , setList] = useState(data)

  const filterList = (value)=>{
    if(value === "all"){
      setList(data)
    }
    else{
      const filterData = data.filter((item) => item.category === value)
      setList(filterData)
    }
  }

  const switchClass = (val)=>{
  const selectedBtn = document.getElementsByClassName('selected')
  selectedBtn[0].classList.remove('selected')
  const element =   document.getElementById(val);
  element.classList.add('selected')
  }

  return(
    <>
    <section className="main-container">

      <article className="btn-container">
        <button className="filter-btn selected" id="all" value="all"
        onClick={(e)=> {filterList(e.target.value); switchClass(e.target.value)}}>all</button>

        {uniqueCategories.map((item) =>{
          return <button className="filter-btn" id={item} value={item}
          onClick={(e)=> {filterList(e.target.value); switchClass(e.target.value)}} key={item}
          >{item}</button>
        })

        }
      </article>

      <article className="all-products-container">

      {
          list.map((item) =>{

                  return <ProductsList val={item} key={item.id}/>

        })}



      </article>

    </section>
    </>
  )
}

export default AllProducts;