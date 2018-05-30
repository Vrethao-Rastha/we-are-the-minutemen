import React from 'react';

const Erios = () => {
  return(
  <div>
    <div class="eriosContainer">
    <div class="chatbot">
        <div id="chatBox" class="dialogContainer"></div>
        <textarea rows="4" id="chatMessage" class="dialogInput" placeholder="Get talking" onkeypress="return newEvent(event)"></textarea>
    </div>
    
  </div>
</div>
  )
};

export default Erios;
