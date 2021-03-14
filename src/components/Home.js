 import React from 'react'; 
 import giantsHat from '../images/giantshat.jpeg'
 import giantsJacket from '../images/giantsjacket.jpg'
 import metsJersey from '../images/metsjersey.jpeg'
 import bullsHat from '../images/bullshat.jpeg'

 
 const Home = () => {
  return(
    <div className="container">
      <div className="image">
        <img src={giantsHat} alt="NY Giants Hat" />
        <h3>NY Giants Hat</h3>
        <h3>$15.00 </h3>
        <a className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={giantsJacket} alt="NY Giants Shorts" /> 
        <h3>NY Giants Shorts</h3>
        <h3>$40.00 </h3>
        <a className="addToCart cart2" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={metsJersey} alt="NY Mets Jersey" />
        <h3>NY Mets Jersey</h3>
        <h3>$70.00 </h3>
        <a className="addToCart cart3" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={bullsHat} alt="Chicago Bulls Hat" />
        <h3>Chicago Bulls Hat</h3>
        <h3>$35.00 </h3>
        <a className="addToCart cart4" href="#">Add to Cart</a>
      </div>
    </div>
  );
};

export default Home;