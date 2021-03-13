 import React from 'react'; 
 import giantsHat from '../images/giantshat.jpeg'
 import giantsShorts from '../images/giantsshorts.jpeg'
 import metsJersey from '../images/metsjersey.jpeg'
 import bullsHat from '../images/bullshat.jpeg'
 
 const Home = () => {
  return(
    <div className="container">
      <div className="image">
        <img src={giantsHat} alt="NY Giants Hat" />
        <h3>Tshirt</h3>
        <h3>$20.00 </h3>
        <a href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={giantsShorts} alt="NY Giants Shorts" /> 
        <h3>Tshirt</h3>
        <h3>$20.00 </h3>
        <a href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={metsJersey} alt="NY Mets Jersey" />
        <h3>Tshirt</h3>
        <h3>$20.00 </h3>
        <a href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={bullsHat} alt="Chicago Bulls Hat" />
        <h3>Tshirt</h3>
        <h3>$20.00 </h3>
        <a href="#">Add to Cart</a>
      </div>
    </div>
  );
};

export default Home;