function signup() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    localStorage.setItem("name", name);
    localStorage.setItem("password", password);
    localStorage.setItem("email", email);

    
    alert(`Your Name is "${name}" \n Your Password is Your Email is "${email}" \n Your Password is "${password}" \n Signup Succesfully!`);
}
// function greetings() {
//     var adj=document.getElementById("userinput").value;
    
//     document.write("Hello!!, "+adj);
//     }


function login() {
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    // Retrieve the saved user information from local storage
    var savedPassword = localStorage.getItem("password");
    var savedEmail = localStorage.getItem("email");

    // Check if the entered information matches the saved information
    if (password === savedPassword && email === savedEmail) {
        alert("Login successful!");
    } else {
        alert("Incorrect  Email or Password  entered");
    }
}