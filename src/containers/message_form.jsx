import React, { Component } from 'react';

// Redux imports
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import actions
import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit= (event) => {
    event.preventDefault();
    this.props.createMessage('general', this.props.currentUser, this.state.value);
    this.setState({value: ''});
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" value="Send"/>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage: createMessage },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
