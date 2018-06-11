import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {addBlog} from '../../redux/Actions/BlogActions'
import { Button, Form, FormGroup, Label, Input, Row, Col, Card,
CardText,
CardImg,
CardBody,
CardTitle,
CardSubtitle, } from 'reactstrap';

class AddBlog extends React.Component {
  state={
    title:'',
    body:'',
    picture:''
  }

  handleSubmit = e => {
      this.props.addBlog( this.state.title, this.state.body, this.state.picture)
    }

      render() {

    return (

<div>
      <Col className="col-md-4 offset-md-2">
        <Card className="diamondCard">
          <CardTitle style={{marginTop:".5em"}} className="text-center">You can't go home again...</CardTitle>
          <CardImg className="diamondCard" top width="100%" src={process.env.PUBLIC_URL + '/home.jpg'} alt="Card image cap" />
          <CardBody>
            <Form onSubmit={ this.handlePostSubmit }>

              <FormGroup>
                <Label type="title" name="title" id="exampleTitle" placeholder="Title">Title</Label>
                <Input
                  type="text"
                  name="text"
                  id="text-field"
                  value={this.state.title}
                  onChange={e => this.setState({title: e.target.value}) }
                />
              </FormGroup>

              <FormGroup>
                <Label type="picture" name="picture" id="exampleTitle" placeholder="Picture">Add a picture</Label>
                <Input
                  type="text"
                  name="text"
                  id="text-field"
                  value={this.state.picture}
                  onChange={e => this.setState({picture: e.target.value}) }
                />
              </FormGroup>

              <Label type="body" name="body" id="exampleBody" placeholder="Body">Compose</Label>
              <FormGroup>
                <textarea rows="4" cols="50"
                  type="text"
                  name="text"
                  id="text-field"
                  value={this.state.body}
                  onChange={e => this.setState({body: e.target.value}) }
                />
              </FormGroup>

            </Form>
            <CardText></CardText>
            <Button style={{borderRadius:"15px"}}
              type="submit"

              onClick={this.handleSubmit}
              >Say It!</Button>
            </CardBody>
          </Card>

      </Col>

      </div>

    );
  }
}

const mapDispatchToProps = dispatch =>
 bindActionCreators({
   addBlog
 }, dispatch)


export default connect(null, mapDispatchToProps)(AddBlog)
