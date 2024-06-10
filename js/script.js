const validateForm = (e) => {
  e.preventDefault();
  console.log(e);

  let firstName = document.contact.fname.value;
  let lastName = document.contact.lname.value;
  let email = document.contact.myEmail.value;
  let Qtype = document.contact.Qtype.value;
  let message = document.contact.message.value;
  let cons = document.contact.op0.value;
  let error = false;

  // Validate first name
  if (firstName.length == 0) {
    document.querySelector('.fnreq').style.display = "block";
    console.log("First name is required");
    error = true;
  }

  // Validate last name
  if (lastName.length == 0) {
    document.querySelector('.lnreq').style.display = "block";
    console.log("Last name is required");
    error = true;
  }
 
  // Validate email
  if (email.length == 0 ||!email.includes('@') ||!email.includes('.')) {
    document.querySelector('.ereq').style.display = "block";
    console.log("Invalid email");
    error = true;
  }
 
  // Validate Qtype
  if (Qtype.length == 0) {
    document.querySelector('.qreq').style.display = "block";
    console.log("Qtype is required");
    error = true;
  }
 
  // Validate message
  if (message.length == 0) {
    document.querySelector('.mreq').style.display = "block";
    console.log("Message is required");
    error = true;
  }
 
  // Validate op0
  if (cons.length == 0) {
    document.querySelector('.oreq').style.display = "block";
    console.log("Op0 is required");
    error = true;
  }
 
  if (!error) {
    document.querySelector('#success').style.display = "flex";
    e.target.reset();
  }
}