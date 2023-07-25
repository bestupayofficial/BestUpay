function sendEmail(){
    console.log("function Call");
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("successMessage");
   // const formContainer = document.getElementById("form-container");
    const contactImage = document.getElementById("contactImage");
    const formContainer =  $("#form-container");
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "gupta.saumya837@gmail.com",
        Password : "75760AA1E8E5805D38464446F3AE13A7EF39",
        To : "bestupayofficial@gmail.com",
        From : "gupta.saumya837@gmail.com",
        Subject : document.getElementById("subject").value,
        Body : "Name:" + document.getElementById("name").value + "<br/>"
        +"Subject:" +document.getElementById("subject").value+"<br/>"+
        "Message:"+document.getElementById("message").value
    }).then(
        successMessage.style.display = "inline",
        contactImage.remove(),
        formContainer.removeClass("col-md-6"),
        formContainer.addClass("col-md-12"),
        contactForm.remove(),
        //formContainer.style.width = "1000px",
        localStorage.setItem("formSubmitted", "true")
   // message => alert(message)
    ).catch(function (error) {
        console.log("Failed to send email:", error);
      });
}
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("formSubmitted") === "true") {
        sendEmail();
    }
  });
