import './home.css'
import abaBanner from '../images/aba-banner.png'
import Carousel from "../components/carousel";

function Home(){
    return (
        <div>
        <section id="background-img-banner">
        <img src={abaBanner} alt="aba banner" />
    </section>
    <Carousel />
        </div>

    )
  };
  
  export default Home;