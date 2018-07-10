import React from 'react';
import renderIf from '../NewsSection/util'
import {
  Container,
  Col,
  Card,
  CardImg,
  CardText,
  img,
  CardBody,
  CardTitle,
  ListGroup,
  Row,
  FormGroup,
  Form,
  Label,
  Input,
  Button,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand
} from 'reactstrap'

const PiperStory = ({ piper }) => {
  return(
    <div>
      <Col>

           <div className="phantom"></div>

           {renderIf(piper.id % 2 === 0,
             <Col>
               <CardImg style={{border:"1px solid white"}} src={process.env.PUBLIC_URL + piper.picture} />
             </Col>
           )}

           {renderIf(piper.id === 9,
             <Col style={{fontSize:"30pt"}}>
               And that was, understandably, the end of our first evenings interview.
               The next evening we camped in an abandoned home and continued from where we left off.
             </Col>
           )}

           <div className="phantom"></div>


                <div style={{color:"white", textShadow:"3px 3px black", fontSize:"20pt"}}>{ piper.question }</div>
                <div className="phantom"></div>
                <div style={{color:"white", textShadow:"3px 3px black", fontSize:"20pt", fontFamily:"Philosopher"}}>{ piper.answer }</div>

                

    </Col>
    </div>
  )
};

export default PiperStory;
