import './products.css'
import { Link } from "react-router-dom";


const Products = () =>{
  return(
    <section className="products-container">

    <article className="headphones-container">
    <div className="columns headphones-img">
      &nbsp;
    </div>

      <div className="columns product-content">
        <h1>Headphones</h1>
        <h3>Our selection of Headphones are perfect for your active lifestyle. Whether you're training for a marathon or working out at the gym, they have the perfect mix of style and performance so you can move with ease.
        </h3>
        <Link to="/headphones"><button className="product-btn">View All</button></Link>
      </div>
    </article>

    <article className="earphones-container">
      <div className="columns earphones-img">
        &nbsp;
      </div>

      <div className="columns product-content">
        <h1>Earphones</h1>
        <h3>Hear the truth from your favorite artists with high-performance drivers that generate outstanding frequency response and pure bass that is deep, powerful and accurate.</h3>
        <Link to="/earphones"><button className="product-btn">View All</button></Link>
      </div>
    </article>



    <article   className="speakers-container">
      <div className=" columns speakers-img">
      &nbsp;
      </div>
      <div className="columns product-content">
        <h1>Speakers</h1>
        <h3>SoundBit has all the speakers you need for your home theater including floor standing speakers, bookshelf speakers, in-wall components or all weather outdoor speakers</h3>
        <Link to="/speakers"><button className="product-btn">View All</button></Link>
      </div>
    </article>



    </section>
  )
}

export default Products;