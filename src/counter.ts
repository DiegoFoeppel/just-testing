export function setupCounter(
  element: HTMLButtonElement,
  button: HTMLButtonElement
) {
  let counter = 0;
  let stepCounter = 1;

  const setStep = (step: number) => {
    stepCounter = step;
    button.innerHTML = `step is ${stepCounter}`;
  };
  button.addEventListener("click", () => setStep(stepCounter + 1));

  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };

  element.addEventListener("click", () => setCounter(counter + stepCounter));
  setCounter(0);
  setStep(1);
}
