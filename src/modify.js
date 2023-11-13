
const clickCounterHandler = (e) => {
  if (e && e.target){
    let currDataclicks = e.target.dataset.clicks;
    currDataclicks = Number(currDataclicks);
    if (!isNaN(currDataclicks)) {
    currDataclicks += 1
    console.log(currDataclicks)
    }

    if (event.target.dataset.clicks == 1) {
        event.target.textContent = "I've been clicked 1 time.";
      } else {
        event.target.textContent = `I've been clicked ${event.target.dataset.clicks} times!`;
      }

      console.log(event.target.textContent)
  }
};
document.addEventListener("click", clickCounterHandler);
clickCounterHandler();



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
