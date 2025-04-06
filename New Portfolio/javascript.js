function sendMail(){
    let parms={
        name: document.getElementById("name").value,
        email:document.getElementById("email").value,
        number:document.getElementById("number").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,

    }
    emailjs.send("service_u490nil","template_vw2ljrz",parms).then(alert("Email Sent!!"))
}