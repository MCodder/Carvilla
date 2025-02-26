import brand1 from "../images/images/brand/br1.png"
import brand2 from "../images/images/brand/br2.png"
import brand3 from "../images/images/brand/br3.png"
import brand4 from "../images/images/brand/br4.png"
import brand5 from "../images/images/brand/br5.png"
import brand6 from "../images/images/brand/br6.png"


// Algorithm 
//1 Import the brand images.
//2 Create a function.
//3 take a <div> container.
//4 Add six img tags inside brand to put the brand logos.
//5 Export the function..


function Brands() {
    return(
        <div>
            <div className="brand" id="Brands">
                <img src={brand1} alt=""></img>
                <img src={brand2} alt=""></img>
                <img src={brand3} alt=""></img>
                <img src={brand4} alt=""></img>
                <img src={brand5} alt=""></img>
                <img src={brand6} alt=""></img>
            </div>
        </div>
    )
}
export default Brands;