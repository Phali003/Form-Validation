
username = /^[A-Z][a-zA-Z0-9]{5,}$/;
password = /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,}$/;
email =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



let users = [];

//check if user already exists
if(users.some(user => user.username || user.email)){
    alert("User or email already exists!!");
}




//Store users
users.push({username: signInUsername, email: signInEmail, password: signInPassword});
