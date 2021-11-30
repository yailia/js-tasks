import CreditCardInputMask from "credit-card-input-mask";

function mask() {
  const inputNumberEl = document.querySelector("[data-valid='number']")
  const inputDateEl = document.querySelector("[data-valid='date']")
  const inputCvcEl = document.querySelector("[data-valid='cvc']")


  const formattedNumber = new CreditCardInputMask ({
    element: inputNumberEl,
    pattern: "{{9999}} {{9999}} {{9999}} {{9999}}",
  })
  const formattedDate = new CreditCardInputMask ({
    element: inputDateEl,
    pattern: "{{99}} / {{99}}",
  })
  const formattedCvc = new CreditCardInputMask ({
    element: inputCvcEl,
    pattern: "{{999}}",
  })
}

export default mask;

