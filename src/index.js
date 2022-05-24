function alertName() {
  let firstName = prompt("What is your name?");
  firstName = firstName.trim();
  firstName = firstName.replace(/[.,*+?^${}()|[\]\\]/g, "");
  if (firstName.length > 0) {
    alert(`Welcome, ${firstName}!`);
  } else {
    alert("Too bad for you!");
  }
}
alertName();
