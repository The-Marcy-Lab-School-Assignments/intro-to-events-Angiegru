const clickButton = document.querySelector("#click-button");

const clickCounterHandler = (button) => {
  let clicks = button.getAttribute("data-clicks");

  let clicksToNum = Number(clicks);
    clicksToNum++
  button.setAttribute("data-clicks", clicksToNum.toString());
  if (clicksToNum === 1){
    button.textContent = "I've been clicked 1 time.";
  } else if (clicksToNum > 1){
    button.textContent =`I've been clicked ${clicksToNum} times!`;
  }
};

clickButton.addEventListener("click", () => clickCounterHandler(clickButton));

const keydownTracker = document.querySelector("#keydown-tracker");
const body = document.querySelector('body');

// should track the last key code pressed , event.code
const handleKeydown = (e) => {
if (e.code === "Enter"){
  keydownTracker.textContent = `You pressed Enter`;
} else if (e.code === "KeyA"){
  keydownTracker.textContent = "You pressed KeyA"
} else if (e.code === "Space"){
  keydownTracker.textContent = `You pressed Space`;
}
};
body.addEventListener("keydown", handleKeydown); // add a event listener on body

// remove click handler in the html +
// add an event listener and use handler from question 1
const inlineButton = document.querySelector("#inline-example");
inlineButton.addEventListener("click",() => clickCounterHandler(inlineButton) );
const handleDelegation = () => {
};

const addNewRandomNumber = () => {
};

const main = () => {
  const delegationContainer = document.querySelector('#delegation');

  delegationContainer.addEventListener('click', handleDelegation);
};

main();
