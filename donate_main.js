document.addEventListener("DOMContentLoaded", main);
function main() {
  const ibanParagraph = document.getElementById("iban");
  const ibanNum = document.getElementById("iban-num");
  const ibanName = document.getElementById("iban-name");

  ibanNum.addEventListener("click", function () {
    copyToClipboard(ibanNum);
  });
  ibanName.addEventListener("click", function () {
    copyToClipboard(ibanName);
  });

  ibanParagraph.addEventListener("click", ibanShow);
}

function ibanShow() {
  const ibanDetails = document.getElementById("iban-details");
  ibanDetails.classList.toggle("iban-show");
}

function copyToClipboard(element) {
  const text = element.textContent;
  element.setAttribute("clicked", "true");

  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  setTimeout(function () {
    element.removeAttribute("clicked");
  }, 1000);
}
