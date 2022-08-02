//Validation

var email=document.forms['form']['email']; //Here names should be used
var password=document.forms['form']['password'];

var email_error=document.getElementById('email_error');
var pass_error=document.getElementById('password_error');

document.getElementById("email").addEventListener('input',verifyEmail);
document.getElementById("password").addEventListener('input',verifyPassword);

function validated(){
    if( email.value.length<8){
        email.style.border="1px solid red";
        email_error.style.display="block";
        email.focus();
        return false;
    }
    let flag=0;
    for(let i of email.value){
        if(i==' '){
            flag=1;
        }
    }
    if(flag==1){
        email.style.border="1px solid red";
        email_error.style.display="block";
        email_error.innerHTML="Email or Phone shouldn't contain spaces"
        email.focus();
        return false;
    }
    if(password.value==""){
        password.style.border="1px solid red";
        pass_error.style.display="block";
        password.focus();
        return false;
    }
    
    if(password.value.length>=1 && password.value.length<8){
        alert("Password should be atleast 8 characters")
        return false;
    }
 
}


function verifyEmail(){
    if( email.value.length>=8){
        email.style.border="1px solid silver";
        email_error.style.display="none";
        return true;
}
}
function verifyPassword(){
    if( password.value.length>=8){
        password.style.border="1px solid silver";
        pass_error.style.display="none";
        return true;
}
}