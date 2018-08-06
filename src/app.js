const InputView = require("./views/input_view.js");

document.addEventListener('DOMContentLoaded', () => {
  const inputView = new InputView();
  inputView.bindEvents();
});
