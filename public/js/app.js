const contactForm = document.querySelector('.contact-form');

let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");


contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();


    let formData ={
        name : name.value,
        email : email.value,
        subject : subject.value,
        message: message.value

    }
    console.log(formData);
    

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onLoad = function(){
        console.log(xhr.response);
        if(xhr.response){
            alert("Email sent success");
            name.value = '';
            email.value = '';
            subject.value="";
            message.value="";

        }else{
            alert("Something wrong");
        }
    }
    xhr.send(JSON.stringify(formData));
})