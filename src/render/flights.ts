import { store } from "../index";

const formatter = new Intl.DateTimeFormat("ru-RU", {
  weekday: "short",
  day: "numeric",
  month: "short",
});

function renderDate(date: Date) {
  const dateParts = formatter.formatToParts(date);
  const weekday = dateParts.find((part) => part.type === "weekday")?.value;
  const month = dateParts.find((part) => part.type === "month")?.value;
  return `${date.getDate()} ${month} ${weekday}`;
}

export function renderFlights(el: HTMLUListElement) {
  const { flights } = store.getState();
  let innerHTML = "";

  flights.forEach((flightWrapper) => {
    const { flight } = flightWrapper;
    const { price, legs } = flight;
    innerHTML += `
           <li class="flights__item-wrapper">
            <div class="flights__item__label">
                <div>
                    <img width="100" src="images/logo.png" alt="">
                </div>
                <div class="price">
                    <div class="font-1_2rem">${price.total.amount} &#8381;</div>
                    <div class="font-0_8rem">Стоимость для одного взрослого пассажира</div>
                </div>
            </div>
            `;

    legs.forEach((leg) => {
      const { segments } = leg;
      const lastSegment = segments.at(-1);
      const arrivalCityEndPoint = lastSegment!.arrivalCity;
      const arrivalAirportEndPoint = lastSegment!.arrivalAirport;
      const arrivalDateEndPoint = lastSegment!.arrivalDate;
      let change = "";
      if (segments.length - 1 === 1) {
        change = `<div class="flights__item__change orange-color">${
          leg.segments.length - 1
        } пересадка</div>`;
      }

      segments.forEach((segment, index) => {
        let {
          departureCity,
          departureAirport,
          arrivalCity,
          arrivalAirport,
          departureDate,
          arrivalDate,
          airline,
        } = segment;

        let durationFlight = segment.travelDuration;
        const depDate = new Date(departureDate);
        let arrDateTmp = new Date(arrivalDate);
        let arrivalCityTmp = arrivalCity;
        let arrivalAirportTmp = arrivalAirport;

        if (!index) {
          arrDateTmp = new Date(arrivalDateEndPoint);
          arrivalCityTmp = arrivalCityEndPoint;
          arrivalAirportTmp = arrivalAirportEndPoint;
          durationFlight = leg.duration;
        }
        const depDateStr = renderDate(depDate);
        let arrDateStr = renderDate(arrDateTmp);
        innerHTML += `
                <div class="flights__item${index ? "-hidden" : ""}">
                    <div class="flights__item__destination">
                        <span>${departureCity?.caption}, ${
          departureAirport?.caption
        }</span>
                        <span class="main-color">(${
                          departureAirport?.uid
                        })</span>
                        <span class="main-color"><i class="fa-solid fa-arrow-right-long"></i></span>
                        <span>${arrivalCityTmp?.caption}, ${
          arrivalAirportTmp?.caption
        }</span>
                        <span class="main-color">(${arrivalAirportTmp?.uid})
                    </div>
                    <div class="flights__item__schedule">
                        <div>
                            <span>${`0${depDate.getHours()}`.slice(
                              -2
                            )}:${`0${depDate.getMinutes()}`.slice(-2)}</span>
                            <span class="main-color font-1rem">${depDateStr}</span>
                        </div>
                        <div><span><i class="fa-regular fa-clock"></i> ${(
                          durationFlight / 60
                        ).toFixed()} ч ${(
          durationFlight % 60
        ).toFixed()} мин</span></div>
                        <div>
                            <span class="main-color font-1rem">${arrDateStr}</span>
                            <span>  ${`0${arrDateTmp.getHours()}`.slice(
                              -2
                            )}:${`0${arrDateTmp.getMinutes()}`.slice(-2)}</span>
                        </div>
                    </div>
                    ${change}
                    <div class="no-border">Рейс выполняет: ${
                      airline.caption
                    }</div>
                </div>
                `;
      });
    });
    innerHTML += `<div class="flights__item__choose white-color no-border">
                ВЫБРАТЬ
            </div>
       </li>
        `;
  });
  el.innerHTML = innerHTML;
}
