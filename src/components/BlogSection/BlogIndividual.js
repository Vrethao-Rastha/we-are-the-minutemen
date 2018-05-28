import React from 'react';
import { ListGroupItem } from 'reactstrap'

const BlogIndividual = ({ blog }) => {
  return(
    <div>
  <ListGroupItem style={{border: "1px solid black"}}> <p className="coolText">{ blog.title }</p> </ListGroupItem>

  <ListGroupItem style={{border: "1px solid black"}}> <p className="coolText">{ blog.body }</p> </ListGroupItem>

  <ListGroupItem style={{border: "1px solid black"}}> <p className="coolText">{ blog.picture }</p> </ListGroupItem>

  <hr/>

  </div>
  )
};

export default BlogIndividual;
