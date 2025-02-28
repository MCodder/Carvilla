
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
// const Header =()=> {
//   const style ={
//     backgroundColor: 'white',
//   }
// }

function Header({style}) {

    let navigate = useNavigate(); 
    const [query,setQuery]=useState("")
    const onSearch = ()=>{
      navigate('/search/'+query)
    }
  return (
    <header>
      <div className="logo"
       style={{ display:"flex",marginBottom:"10px", flexDirection:"row", width:"500px", justifyContent:"space-between"}}
       >
        <Link to="/" style={{textDecoration:"none", color:"White", fontSize:"30px", marginTop:"10px"}}>CARVILLA</Link>
        <form  
        // style={{display:"flex", height:"40px", border:"black"}}
        onSubmit={onSearch}
         method="post"
         >
           <input type="text" name="search" placeholder="Search Your Car..."
          //  style={{backgroundColor:"transparent", border:"solid 2px black" ,color:"white", marginTop:"30px"}}
           value={query} 
           />
              <button type="submit" value={"search"}
               style={{width:"30px",height:"20px"  , marginBottom: "29px"
                ,display:"flex", alignItems:"center"
          }}
               onChange={(e)=>{setQuery(e.target.value)}}
                > <FaSearch /></button> 
         
        </form>
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