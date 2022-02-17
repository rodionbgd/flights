import { store } from "../index";

export function renderAirlines(el: HTMLElement) {
  const { airlines } = store.getState();
  let innerHTML = "";
  airlines.forEach((airline) => {
    innerHTML += `
         <li>
            <input type="checkbox" data-airline="${airline}" checked>
            <span>${airline}</span>
         </li>
        `;
  });
  el.innerHTML = innerHTML;
}
