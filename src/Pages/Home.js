import Cards from './Cards';
import Featured from './Featured';
import Brands from './Brands';
import Footer from './Footer';

import Header from "./Header";
function Home() {
    return(
       <>
        <div className='HeroBanner'>
       <section className="main-Section">
       <Header  />
        <h1>GET YOUR DESIRE CAR IN RESONABLE PRICE</h1>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit praesentium quaerat tenetur amet distinctio quae doloribus optio magni corrupti.</h5>
        <button>Contact Us</button>
       <div className='overlay'></div>
       </section>
        </div>
      <Cards/>
      <Featured />
      <Brands />
       </>
    )
}
export default Home;

