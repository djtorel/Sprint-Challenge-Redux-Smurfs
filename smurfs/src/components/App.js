import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getSmurfs } from '../actions';
import Smurf from './Smurf';
import SmufForm from './SmurfForm';

class App extends Component {
  componentDidMount = () => {
    const { getSmurfs } = this.props;

    getSmurfs();
  };
  render() {
    const { smurfs } = this.props;
    return (
      <div className="App">
        <SmufForm />
        {smurfs.map(({ name, age, height, id }) => (
          <Smurf key={id} name={name} age={age} height={height} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ smurfs }) => ({ smurfs });

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
