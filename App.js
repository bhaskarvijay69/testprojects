import React, { useState } from 'react';
import Popup from './Popup';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div>
    <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
    {isOpen && <Popup
      content={<>
        <b>Apple nutrition facts</b>
        <p>
Here are the nutrition facts for one raw, unpeeled, medium-sized apple (100 grams):

Calories: 52
Water: 86%
Protein: 0.3 grams
Carbs: 13.8 grams
Sugar: 10.4 grams
Fiber: 2.4 grams
Fat: 0.2 grams</p>

      </>}
      handleClose={togglePopup}
    />}
  </div>
}

export default App;
