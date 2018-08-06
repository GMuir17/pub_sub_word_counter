const PubSub = require("../helpers/pub_sub.js");

const WordCounter = function () {};

WordCounter.prototype.bindEvents = function () {
  PubSub.subscribe("InputView:text-inputted", (evt) => {
    const inputtedText = evt.detail;
    const result = this.countWords(inputtedText);
    console.log(result);
  });
};

WordCounter.prototype.countWords = function (text) {
  return text.split(" ").length;
};

module.exports = WordCounter;
