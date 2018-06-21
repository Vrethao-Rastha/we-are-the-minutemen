import React from 'react';
import {
  Container,
  Col,
  Card,
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
  console.log('piper', piper)
  return(
    <div>
      <Col>
           <img top width="100%" src={ piper.picture } alt="Card image cap" />
           <div className="phantom"></div>

                <div style={{color:"white", textShadow:"2px 2px black"}}>{ piper.question }</div>
                <div className="phantom"></div>
                <div style={{color:"white", textShadow:"2px 2px black"}}>{ piper.answer }</div>
            <div className="phantom"></div>

            <br/>

    </Col>
    </div>
  )
};

export default PiperStory;
