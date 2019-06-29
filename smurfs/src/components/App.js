import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getSmurfs } from '../actions';
import Smurf from './Smurf';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount = () => {
    const { getSmurfs } = this.props;

    getSmurfs();
  };
  render() {
    const { smurfs } = this.props;
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {smurfs.map(({ name, age, height }, i) => (
          <Smurf key={i} name={name} age={age} height={height} />
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
