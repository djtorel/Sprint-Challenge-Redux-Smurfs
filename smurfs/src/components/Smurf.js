import React, { useState, useReducer } from 'react';
import { connect } from 'react-redux';
import { updateSmurf } from '../actions';

const Smurf = ({ name, age, height, id, updateSmurf }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name,
      age,
      height,
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
      updateSmurf(userInput, id);
      setIsEditMode(false);
    }
  };

  return isEditMode ? (
    <div>
      <form>
        <input
          type="text"
          name="name"
          value={userInput.name}
          onChange={handleInput}
        />
        <input
          type="text"
          name="age"
          value={userInput.age}
          onChange={handleInput}
        />
        <input
          type="text"
          name="height"
          value={userInput.height}
          onChange={handleInput}
        />
        <button onClick={handleSubmit}>Update Smurf</button>
      </form>
    </div>
  ) : (
    <div>
      <div> {name} </div>
      <div> {age} </div>
      <div> {height} </div>
      <button onClick={() => setIsEditMode(true)}>Edit</button>
    </div>
  );
};

export default connect(
  () => ({}),
  { updateSmurf }
)(Smurf);
