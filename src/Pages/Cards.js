import Imagetic from "../images/images/icon1.png";
import  { useState, useEffect } from 'react';

// Algorithm 
//1 Create a list of objects (data) with card details.
//2 then Create a function Cards.
//3 then apply Loop through the data using map for every item.
//4 Create a card with an bu using image, title (h3), description (h4).
//5 Export the function and use it in appjs.


function Cards() {


        const [profiles, setProfiles] = useState([]); 
    
        useEffect(() => {
            fetch('http://localhost:8000/Cads') 
                .then((res) => res.json()) 
                .then((data) => setProfiles(data))
                .catch((error) => console.error('Error fetching data:', error));
        }, []);  
    return (
        <div className="Card-Section" id="down">
            {profiles.map((profile) => {
          return (
            <div className="card" key={profile.id} >
                <img src={Imagetic} alt="" style={{padding:"5%"}}></img>
                <div className="data">
                    <h3>{profile.h3}</h3>
                    <h5>{profile.h4}</h5>
                </div>
                <div className="line"></div>
            </div>
          );
        })}
        </div>
    )
}
export default Cards;