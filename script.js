document.getElementById("signupForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let confirmPassword = document.getElementById("confirmPassword").value;

let message = document.getElementById("message");

if(password !== confirmPassword){
message.style.color="red";
message.innerText="Passwords do not match!";
return;
}

if(password.length < 6){
message.style.color="red";
message.innerText="Password must be at least 6 characters!";
return;
}

message.style.color="green";
message.innerText="Signup Successful!";
});