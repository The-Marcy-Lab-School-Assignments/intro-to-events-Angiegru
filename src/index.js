const button = document.querySelector(`#add-one`);
const results = document.querySelector(`#results`);

button.addEventListener(`click`, () => {
 let incrementResults = Number(results.textContent) + 1;
 results.textContent = incrementResults;
});
