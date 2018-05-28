import React from 'react'
import { Container,
         Row,
         Col,
         Form,
         Label,
         Input,
         Navbar,
         NavItem,
         NavbarBrand } from 'reactstrap'
import minutemenFlag from '../images/flagMinutemen.png'
import railroadFlag from '../images/flagRailroad.jpg'
import instituteFlag from '../images/flagInstitute.png'
import brotherhoodFlag from '../images/flagBrotherhood.jpg'


const Footer = () => {
  return(
    <Navbar className="footer" color="dark">
        <NavbarBrand>
            <p className="copyright">Copyright © 2287 Minutemen of the Commonwealth</p>
        </NavbarBrand>
        <div className="row">
          <img className="factionLogo" src={minutemenFlag} alt=""/>
          <img className="factionLogo" src={brotherhoodFlag} alt=""/>
          <img className="factionLogo" src={railroadFlag} alt=""/>
          <img className="factionLogo" src={instituteFlag} alt=""/>
        </div>
      </Navbar>
  )
}

export default Footer
