import React from 'react';
import { ListGroupItem } from 'reactstrap'

const PiperStory = ({ piper }) => {
  return(
  <div>
    <ListGroupItem style={{border: "1px solid black"}}> <p className="coolText">{ piper.title }</p> </ListGroupItem>

    <ListGroupItem style={{border: "1px solid black"}}> <p className="coolText">{ piper.body }</p> </ListGroupItem>

    <ListGroupItem style={{border: "1px solid black"}}> <p className="coolText">{ piper.picture }</p> </ListGroupItem>

    <hr/>
  </div>
  )
};

export default PiperStory;
