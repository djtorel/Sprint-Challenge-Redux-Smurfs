import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

const SmurfForm = ({ addSmurf }) => {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: '',
      age: '',
      height: '',
    }
  );

  const handleInput = ({ target: { name, value } }) => {
    setUserInput({ [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      userInput.name.length > 0 &&
      userInput.age.length > 0 &&
      userInput.height.length > 0
    ) {
      addSmurf(userInput);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={userInput.name}
        onChange={handleInput}
      />
      <label>Age</label>
      <input
        type="text"
        name="age"
        value={userInput.age}
        onChange={handleInput}
      />
      <label>Height</label>
      <input
        type="text"
        name="height"
        value={userInput.height}
        onChange={handleInput}
      />
      <button onClick={handleSubmit}>Add Smurf</button>
    </form>
  );
};

export default connect(
  () => ({}),
  { addSmurf }
)(SmurfForm);
