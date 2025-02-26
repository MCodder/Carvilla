

import { Link } from "react-router-dom";

// const Header =()=> {
//   const style ={
//     backgroundColor: 'white',
//   }
// }

function Header({style}) {
  return (
    <header>
      <div className="logo">
        <h2>CARVILLA</h2>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <a href="#down">Service</a>
        <a href="#Features">FeaturedCars</a>
        <a href="#Brands">Brands</a>
        <Link to="/about">About</Link>
        <Link to="/createfeatures">CreateFeatures</Link>
        <Link to="/create-service">CreateService</Link>
      </nav>
    </header>
  );
}

export default Header;