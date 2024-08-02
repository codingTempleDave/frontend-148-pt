function handleButtonClick(){
  alert("button clicked");
}

function handleMouseOver(){
  console.log("mouse over");
}

function handleMouseOut(){
  console.log("mouse out");
}

function handleKeyDown(event){
  console.log(event);
  console.log("Key pressed:", event.key);
}

function handleSubmit(event){
  event.preventDefault();
  const userName = event.target.elements.username.value;
  console.log("User name:", userName);
}

function handleChange(event){
  console.log("Input value changed to:", event.target.value);
}

function handleFocus() {
  console.log("Input element focused");
}

function handleBlur() {
  console.log("Input element blurred");
}

function updateParagraph(){
  const paragraph = document.getElementById("message");
  paragraph.innerHTML = "<b>Woot!</b>  I've been updated!";

  const newParagraph = document.createElement("p");
  newParagraph.innerHTML = "Hey, this has been placed by JS!";

  document.getElementById("container").appendChild(newParagraph);



  // BAD go to the DOM the least amount possible
  /*
  const paragraph = document.getElementById("message").value;
  const paragraph2 = document.getElementById("message").append(something);
  const paragraph3 = document.getElementById("message").animate();
  */
}

function changeImage(){
  const newImageSrc = "images/after.jpg";
  document.getElementById("image").src = newImageSrc;
}

function revertImage(){
  const newImageSrc = "images/before.jpg";
  document.getElementById("image").src = newImageSrc;
}

function handleSubmit2(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  alert("Hello, " + username + "! Your email is " + email +
    ". Form submitted successfully.");
  document.getElementById("myForm").reset();
}

function highlight(){
  const box = document.getElementById("box");
  box.classList.add("highlighted");
  box.style.backgroundColor = "black";
  box.style.color = "red";
}

// document.getElementById("myButton").addEventListener("click", function(){
//   alert("button clicked!");
// });

const myButton = document.getElementById("myButton");

function clickHandler() {
  alert("button clicked");
  // Remove event listener after the second click
  // useful for when you want an event to only happen once
  myButton.removeEventListener("click", clickHandler);
  alert("Event listener removed!");
}

myButton.addEventListener("click", clickHandler);