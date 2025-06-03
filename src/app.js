import "bootstrap";
import "./style.css";

window.onload = function() {

  const suits = ['♦', '♥', '♠', '♣']
  const numValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomValue = numValue[Math.floor(Math.random() * numValue.length)];
   
  document.getElementById("topSuit").innerHTML = randomSuit;
  document.getElementById("bottomSuit").innerHTML = randomSuit;
  document.getElementById("value").innerHTML = randomValue;

  const redSuits = ['♦', '♥']
  const color = redSuits.includes(randomSuit) ? "red" : "black";

  document.getElementById("topSuit").style.color = color;
  document.getElementById("bottomSuit").style.color = color;
  document.getElementById("value").style.color = color;
};
