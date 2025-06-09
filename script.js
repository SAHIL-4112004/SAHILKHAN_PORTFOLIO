function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    };
    
    emailjs.send("service_anj55ct", "template_vtw6tf6", parms).then(alert("Email sent successfully!"))
}
