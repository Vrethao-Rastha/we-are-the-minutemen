import React from 'react';
import {CardImg} from 'reactstrap'
import cardPic1 from '../images/Fallout-4-Concept-Art-1.jpg'

const ScrollerPic1 = () => {

    return(
    <div>
      <CardImg className="diamondCard cardFix" top width="100%" src={ cardPic1 }  />
    </div>
    )
  }

export default ScrollerPic1;
