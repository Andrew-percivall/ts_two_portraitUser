// Напишіть скрипт, який переводить години в секунди і має робити наступне:

// запитати у користувача кількість годин;
// порахувати, скільки секунд у цій кількості годин;
// записати обчислене значення у змінну;
// вивести цю змінну користувачеві через alert.

const inputHours = document.getElementById("inputHours") as HTMLInputElement;

const btnSubmit = document.getElementById("btnSubmit") as HTMLButtonElement;

const form = document.getElementById("form") as HTMLFormElement;

function convertHours(e: Event) {
  e.preventDefault();

  const value:string = inputHours.value.trim();

  const hours = +value;

  if (hours <= 0 || isNaN(hours)) {
    alert("Введіть число!, яке більше 0");
    return;
  }

  function Str(n: number): string {
    if (n === 1) {
      return "Годині";
    } else {
      return "Годинах";
    }
  }

  const message: string = Str(hours);

  const result: number = hours * 60 * 60;

  alert(`В ${value} ${message} ${result} секунд`);
}

form.addEventListener("submit", convertHours);
