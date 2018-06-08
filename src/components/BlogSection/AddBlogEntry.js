import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {addBlog} from '../../redux/actions'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
      <Form
        onSubmit={this.handleSubmit}
        inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="text" className="mr-sm-2">Title</Label>
          <Input type="text" name="text"
            value={this.state.title}
          onChange={e => this.setState({title: e.target.value })} />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="text" className="mr-sm-2">Body</Label>
          <textarea rows="4" cols="100" type="text" name="text"
            value={this.state.body}
          onChange={e => this.setState({body: e.target.value})} />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="text" className="mr-sm-2">Add a pic</Label>
          <Input type="text" name="text"
            value={this.state.picture}
          onChange={e => this.setState({picture: e.target.value})} />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch =>
 bindActionCreators({
   addBlog
 }, dispatch)


export default connect(null, mapDispatchToProps)(AddBlog)
