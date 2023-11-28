const GENERAL_ADMISSION_TICKET_COST = 20;
const CHILD_AND_SENIOR_TICKET_COST = 10;
const MATINEE_DISCOUNT = 3;

const ticketBtn = document.querySelector('#ticket-btn');
ticketBtn.addEventListener('click', buyTicket);

// let steps = 0;
function buyTicket() {
  const age = prompt('What is your age?');
  let ticketPrice = getBaseTicketCost(age);

  const isMatinee = prompt('Are you attending a matinee show?').toLowerCase();
  ticketPrice = applyMatineeCost(ticketPrice, isMatinee);

  document.querySelector(
    '#ticket-price'
  ).innerText = `Ticket Price: $${ticketPrice}`;

  alert(`Your ticket price is $${ticketPrice}`);

  //   steps = 0;
  //   collatz(prompt('n=?'));
  //   console.log(`Steps: ${steps}`);
}

function getBaseTicketCost(age) {
  if (age <= 12 || age >= 65) return CHILD_AND_SENIOR_TICKET_COST;
  return GENERAL_ADMISSION_TICKET_COST;
}

function applyMatineeCost(cost, isMatinee) {
  if (isMatinee === 'yes' || isMatinee === 'y') return cost - MATINEE_DISCOUNT;
  return cost;
}

// function collatz(n) {
//   console.log(n);
//   if (n === 1) return;
//   steps += 1;
//   if (n % 2 == 0) collatz(n / 2);
//   else collatz(3 * n + 1);
// }
