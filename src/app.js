const InputView = require("./views/input_view.js");
const WordCounter = require("./models/word_counter.js");

document.addEventListener('DOMContentLoaded', () => {
  const inputView = new InputView();
  inputView.bindEvents();

  const wordCounter = new WordCounter();
  wordCounter.bindEvents();
});
