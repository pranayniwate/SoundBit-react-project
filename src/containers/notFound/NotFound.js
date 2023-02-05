import './notFound.css'
import {Link} from 'react-router-dom'

const NotFound = ()=>{

  return(
    <section className="not-found-container">
    <h1>404</h1>
    <h3>Not Found</h3>
    <Link to="/"><button>Home</button></Link>
    </section>
  )
}

export default NotFound;