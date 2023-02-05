import './header.css'
import { Link } from "react-router-dom";

const Header = ()=>{

  return(
    <section className="header-container">
      <article className="header-title">
        <h1>Treat yourself to superior sound quality</h1>
        <h3>Get lost in your music. Enjoy games, films, podcasts and calls with high-quality sound. Discover headphones that fit and enrich your lifestyle.
</h3>
      <div className="header-button">
      <Link to="/all"><button>Explore all products</button></Link>
      </div>
      </article>

      <article className="header-image">
      <div className="first-container">
        <img className="first-image"
        src="https://img.freepik.com/free-vector/wireless-headphones-outline-entertainment-device-vector-illustration_53876-146447.jpg?w=2000"/>
      </div>

      <div className="second-container">
        <img className="second-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxg5PqA7REJEgLGA7D7t3-LSbmzfrRwN83yMod0DgXX0rjcPlKgHreflwH4ev2xZm8E2I&usqp=CAU"/>
      </div>

      </article>
    </section>
  )
}

export default Header;

// <img className="second-image"
// src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxg5PqA7REJEgLGA7D7t3-LSbmzfrRwN83yMod0DgXX0rjcPlKgHreflwH4ev2xZm8E2I&usqp=CAU"/>