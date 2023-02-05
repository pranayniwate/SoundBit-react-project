import './whyus.css'
import {GrPowerCycle} from "react-icons/gr"
import {FiThumbsUp} from "react-icons/fi"
import {BsTruck} from "react-icons/bs"


const Whyus = () =>{
  return (
    <section className="whyus-container">
    <div className="whyus-title">
    <h1>Why Buy From SoundBit ?</h1>
    <h3>SoundBit is your one stop store to fulfill all your audio needs.
    We only have top notch products from best brands who have spent years in audio research and technology to curate their products as per user needs.</h3>
    </div>

    <div className="whyus-content">
      <h1><BsTruck className="whyus-logo"/> Free Shipping</h1>
      <h1><FiThumbsUp className="whyus-logo"/> 100% Genuine</h1>
      <h1><GrPowerCycle className="whyus-logo"/> Return within 10 days</h1>
    </div>
    </section>
  )
}

export default Whyus;