// ✅ Importing React and useState hook
// useState is a built-in hook used to manage state in functional components
import React, { useState } from 'react';

// ✅ Main App component
function App() {

  // ✅ Declaring a state variable "counter" with initial value 15
  // "setCounter" is the function that updates the value and causes the component to re-render
  let [counter, setCounter] = useState(15);

  // ✅ Function to increase the counter value
  // Note: Even though we modify 'counter' manually, React handles updates only through 'setCounter'
  const addvalue = () => {
    counter = counter + 1;               // Not necessary (just for log); React uses setCounter
    console.log("Clicked Add:", counter);
    setCounter(counter);                 // ✅ This triggers re-render with new value
  };

  // ✅ Function to decrease the counter value
  const removevalue = () => {
    counter = counter - 1;
    console.log("Clicked Remove:", counter);
    setCounter(counter);
  };

  // ✅ JSX returned from the component
  // React will re-render this whenever state (counter) changes
  return (
    <>
      {/* ✅ Displaying counter value in a heading */}
      <h1>COUNTER VALUE: {counter}</h1>

      {/* ✅ Button to add value on click */}
      <button onClick={addvalue}>Add Value {counter}</button>

      <br />

      {/* ✅ Button to remove value on click */}
      <button onClick={removevalue}>Remove Value {counter}</button>

      {/* ✅ Showing the same counter in footer to show how state reflects in multiple places */}
      <footer>Footer: {counter}</footer>
    </>
  );
}

// ✅ Exporting the component to be used in main.jsx
export default App;
