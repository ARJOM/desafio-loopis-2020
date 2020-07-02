function sendMail(email, amigo){
    const templateParams = {
        "to_email": email,
        "message":`Seu amigo secreto é ${amigo}`,
    };

    emailjs.send("default_service", "amigo_secreto", templateParams)
    .then(response => console.log(response))
    .catch(err => console.log(err));
}