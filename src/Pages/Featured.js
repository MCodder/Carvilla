import Image1 from "../images/images/new-cars-model/ncm1.png";
import Image2 from "../images/images/new-cars-model/ncm2.png";
import Image3 from "../images/images/new-cars-model/ncm3.png";
import Image4 from "../images/images/new-cars-model/ncm1.png";
import  { useState, useEffect } from 'react';
// Algorithm
// 1 first Import car images.
// 2 then Create a list by adding car details (name, description, price, model, image).
// 3 Create a function named as features
// 4 Apply loop through the data with the help of map for every car details.
// 6 Create a card with an image, name, price, description, and model details.
// 7 Export the function and use it in appjs.ss

function Featured() {

     const [Featured, setFeatured] = useState([]); 
        
            useEffect(() => {
                fetch('http://localhost:8000/Featured')  
                    .then((res) => res.json())  
                    .then((data2) => setFeatured(data2))
                    .catch((error) => console.error('Error fetching data:', error));
            }, []);  
    return(
        <div className="Featured" id="Features">
            <div className="heading">
                <h4>Checkout Featured Cars</h4>
                <h2>Featured Cars</h2>
                <div className="line"></div>
            </div>
            <div id="Featured-cards">
            {Featured.map((Featured) => { 
          return (
            <div className="card" key={Featured.id} 
            //  style={{width:"500px", border:"none"}}
            >
                <div className="images" style={{height:"240px", width:"100%", display:"flex",justifyContent:"space-between", alignItems:"center", flexDirection:"column",  }}>
                <img src={Image3} alt="img"  style={{width:"100%", height:"80%" , padding:"40px"}}></img>
                <span style={{width:"100%", borderTop:"solid 1px grey ", height:"20%",margintop:"10%", padding:"8px 0 0 8px"}}>
                <h6>Modle: {Featured.model}</h6>
                </span>
                </div>
                <div className="data" style={{color:"#72748e"}}>
                    <h5 style={{color:"black", marginTop:"20px"}}>{Featured.h4}</h5>
                    <span style={{color:"black", marginBottom:"20px"}}>{Featured.rupee}</span>
                    <h6>{Featured.h5}</h6>
                </div>
                <div className="line"></div>
            </div>
          );
        })}
        </div>
        </div>
    )
}
export default Featured;