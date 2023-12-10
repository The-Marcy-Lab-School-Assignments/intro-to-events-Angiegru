const clickButton = document.querySelector("#click-button");

const clickCounterHandler = () => {
  let clicks = clickButton.getAttribute("data-clicks");

  let clicksToNum = Number(clicks);
  clicksToNum++
 clickButton.setAttribute("data-clicks", clicksToNum.toString());
 if (clicksToNum === 0){
  clickButton.textContent = "I haven't been clicked!";
} else if (clicksToNum === 1){
  clickButton.textContent = "I've been clicked 1 time.";
} else {
  clickButton.textContent =`I've been clicked ${clicksToNum} times!`;
}
}

clickButton.addEventListener("click", clickCounterHandler);

// get access to button's "data-clicks" attribute, turn string into num +1 then back to string



const handleKeydown = () => {
//   const pTag = document.querySelector("#keydown-tracker");
//   pTag.textContent = `You pressed ${event.code}`;
};

const handleDelegation = () => {
  // const resultSpan = document.querySelector('#delegation-result');
  // resultSpan.textContent = event.target.textContent;
};

const addNewRandomNumber = () => {
};

const main = () => {
  const delegationContainer = document.querySelector('#delegation');

  delegationContainer.addEventListener('click', handleDelegation);
};

main();
