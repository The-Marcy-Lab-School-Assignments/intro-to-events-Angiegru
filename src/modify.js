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
};

clickButton.addEventListener("click", clickCounterHandler);

const keydownTracker = document.querySelector("#keydown-tracker");
const body = document.querySelector('body');

// add a event listener on body
const handleKeydown = (e) => {
// should track the last key code pressed , event.key
// modify the textcontent of the `p` tag with an id of `keydown-tracker` with 'You pressed KeyA', 'You pressed Space', 'You pressed Enter'
if (e.code === "Enter"){
  keydownTracker.textContent = `You pressed Enter`;
} else if (e.code === "KeyA"){
  keydownTracker.textContent = "You pressed KeyA"
} else if (e.code === "Space"){
  keydownTracker.textContent = `You pressed Space`;
}
};
body.addEventListener("keydown", handleKeydown);

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
