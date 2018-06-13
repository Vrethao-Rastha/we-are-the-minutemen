import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, withRouter } from 'react-router-dom'
import { userLogout } from '../../redux/auth'
import { Container,
         Button,
         DropdownMenu,
         DropdownItem,
         DropdownToggle,
         UncontrolledDropdown,
         Row,
         Col,
         Form,
         Label,
         Input,
         Navbar,
         NavItem,
         NavbarBrand } from 'reactstrap'
import logo from '../images/Icon_Minutemen_quest.png'


  class MainNav extends Component {

    handleSubmit = e => {
      e.preventDefault()
      this.props.userLogout(this.props.history)
    }
    render(){
    return(
      <Navbar className="logNav" style={{marginBottom: "2em"}} color="dark">
        <NavbarBrand className="logNav" style={{color: 'white', fontSize: "2em", paddingLeft: "0px"}}>
          <img src={logo} style={{maxHeight: "1.5em"}}/> Radio Freedom
        </NavbarBrand>
        <UncontrolledDropdown className="navLinks">
        <DropdownToggle style={{borderRadius:"25px"}} className="navLinks" caret>
                  More Places
                </DropdownToggle>
        <DropdownMenu right className="navLinks">
                <DropdownItem className="navLinks">
                  <Link className="navLinks" to="/NewsMain">Latest News</Link>
                </DropdownItem>



                {/* diasbled due to lack of time */}



                <DropdownItem className="navLinks">
                  <Link className="navLinks" to="/PipersPage">Piper's Field Reports</Link>
                </DropdownItem>
                <DropdownItem className="navLinks">
                  <Link className="navLinks" to="/BlogPage">Blog of the General</Link>
                </DropdownItem>
                <DropdownItem className="navLinks">
                  <Link className="navLinks" to="/Erios">Erios </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="navLinks">
                  <Button className="navLinks logout" onClick={ this.handleSubmit }>Logout</Button>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

      </Navbar>
    )
  }
}
  const mapDispatchToProps = dispatch =>
    bindActionCreators({
      userLogout
    }, dispatch)

  export default withRouter(connect(null, mapDispatchToProps)(MainNav))
