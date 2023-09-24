
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  

  let intervalId;
  let isColorChanging = false;
  

  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');
  

  function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
  }
  

  startButton.addEventListener('click', () => {
    if (!isColorChanging) {
      intervalId = setInterval(changeBackgroundColor, 1000); 
      isColorChanging = true;
      startButton.disabled = true; 
    }
  });
  
  
  stopButton.addEventListener('click', () => {
    if (isColorChanging) {
      clearInterval(intervalId); 
      isColorChanging = false;
      startButton.disabled = false; 
    }
  });
  
